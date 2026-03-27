// ===== storage.js =====
;(function (global) {
  var COOKIE_DAYS = 365;
  var COOKIE_LIMIT = 3500;
  var STORAGE_PREFIX = "tynan_local_";
  var KEYS = {
    presets: "tynan_art_presets",
    customEvents: "tynan_art_custom_events",
    theme: "tynan_art_theme",
  };

  function getLocalStorage() {
    try {
      return global.localStorage || null;
    } catch (_error) {
      return null;
    }
  }

  function getStorageKey(name) {
    return STORAGE_PREFIX + name;
  }

  function setLocal(name, value) {
    var storage = getLocalStorage();
    if (!storage) return false;
    try {
      storage.setItem(getStorageKey(name), value);
      return true;
    } catch (_error) {
      return false;
    }
  }

  function getLocal(name) {
    var storage = getLocalStorage();
    if (!storage) return "";
    try {
      return storage.getItem(getStorageKey(name)) || "";
    } catch (_error) {
      return "";
    }
  }

  function removeLocal(name) {
    var storage = getLocalStorage();
    if (!storage) return;
    try {
      storage.removeItem(getStorageKey(name));
    } catch (_error) {}
  }

  function setCookie(name, value, days) {
    var expires = new Date(Date.now() + (days || COOKIE_DAYS) * 86400000).toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + "; expires=" + expires + "; path=/; SameSite=Lax";
  }

  function getCookie(name) {
    var prefix = name + "=";
    var parts = document.cookie ? document.cookie.split("; ") : [];
    for (var i = 0; i < parts.length; i += 1) {
      if (parts[i].indexOf(prefix) === 0) {
        return decodeURIComponent(parts[i].slice(prefix.length));
      }
    }
    return "";
  }

  function removeCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax";
  }

  function loadJson(name, fallback) {
    try {
      var raw = getLocal(name) || getCookie(name);
      if (raw && !getLocal(name)) setLocal(name, raw);
      return raw ? JSON.parse(raw) : fallback;
    } catch (_error) {
      return fallback;
    }
  }

  function saveJson(name, value) {
    var payload = JSON.stringify(value || []);
    var savedLocal = setLocal(name, payload);
    if (!savedLocal && encodeURIComponent(payload).length > COOKIE_LIMIT) {
      throw new Error("保存失败：内容过大，且当前环境无法使用本地存储。");
    }
    if (encodeURIComponent(payload).length <= COOKIE_LIMIT) {
      setCookie(name, payload, COOKIE_DAYS);
    } else {
      removeCookie(name);
    }
  }

  function loadPresets() {
    return loadJson(KEYS.presets, []);
  }

  function savePresets(items) {
    saveJson(KEYS.presets, items || []);
  }

  function loadCustomEvents() {
    return loadJson(KEYS.customEvents, []);
  }

  function saveCustomEvents(items) {
    saveJson(KEYS.customEvents, items || []);
  }

  function loadTheme() {
    var theme = getLocal(KEYS.theme) || getCookie(KEYS.theme) || "light";
    if (theme && !getLocal(KEYS.theme)) setLocal(KEYS.theme, theme);
    return theme;
  }

  function saveTheme(theme) {
    var value = theme || "light";
    setLocal(KEYS.theme, value);
    setCookie(KEYS.theme, value, COOKIE_DAYS);
  }

  function clearAll() {
    removeCookie(KEYS.presets);
    removeCookie(KEYS.customEvents);
    removeCookie(KEYS.theme);
    removeLocal(KEYS.presets);
    removeLocal(KEYS.customEvents);
    removeLocal(KEYS.theme);
  }

  global.TynanStorage = {
    keys: KEYS,
    loadPresets: loadPresets,
    savePresets: savePresets,
    loadCustomEvents: loadCustomEvents,
    saveCustomEvents: saveCustomEvents,
    loadTheme: loadTheme,
    saveTheme: saveTheme,
    clearAll: clearAll,
  };
})(window);

// ===== catalog.js =====
;(function (global) {
  var CATEGORY_ORDER = [
    "自定义类",
    "创作与成果",
    "生活与娱乐",
    "社交与关系",
    "战斗与冲突",
    "生存与状态",
    "动物与自然",
    "旅途与迁移",
    "天象与灾害",
    "心灵与仪式",
  ];

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function slugify(text) {
    return String(text || "")
      .trim()
      .toLowerCase()
      .replace(/[^\w\u4e00-\u9fa5]+/g, "_")
      .replace(/^_+|_+$/g, "")
      .slice(0, 48);
  }

  function buildSimpleFields(requiredSlots, optionalSlots) {
    var result = requiredSlots.map(function (slot) {
      return slot.key;
    });
    optionalSlots.forEach(function (slot) {
      if (slot.key === "date_text") result.push("date_text");
    });
    return result;
  }

  function buildCompleteFields(requiredSlots, optionalSlots) {
    var fields = buildSimpleFields(requiredSlots, optionalSlots).slice();
    optionalSlots.forEach(function (slot) {
      if (slot.key !== "date_text") fields.push(slot.key);
    });
    return fields.concat(["scene_hint", "detail_hint", "style_hint", "include_detail", "include_style", "include_context"]);
  }

  function normalizeSlots(slots) {
    return (slots || [])
      .map(function (slot) {
        return {
          key: String(slot.key || "").trim(),
          label: String(slot.label || "").trim(),
          slot_type: String(slot.slot_type || "").trim(),
          suggestion_type: String(slot.suggestion_type || "").trim(),
        };
      })
      .filter(function (slot) {
        return slot.key && slot.label && slot.slot_type;
      });
  }

  function normalizeTemplates(rawTemplates) {
    function list(key, fallback) {
      var source = (rawTemplates && rawTemplates[key]) || [];
      var values = source
        .map(function (item) {
          return String(item || "").trim();
        })
        .filter(Boolean);
      return values.length ? values : fallback.slice();
    }

    return {
      event_nouns: list("event_nouns", ["{pawn_display}经历了一件自定义事件"]),
      main_images: list("main_images", ["{pawn_display}正处于自定义事件之中{scene_fragment}"]),
      detail_sentences: list("detail_sentences", ["背景中的细节被刻意简化，以突出事件主体。"]),
      style_sentences: list("style_sentences", ["这件作品带着一种自定义事件独有的叙述气息。"]),
      scene_phrases: list("scene_phrases", ["在一处未明言的地点"]),
    };
  }

  function normalizeCustomEvent(raw) {
    var label = String(raw.label || "").trim() || "未命名自定义事件";
    var id = String(raw.id || "").trim() || "custom_" + slugify(label || Date.now());
    if (id.indexOf("custom_") !== 0) id = "custom_" + slugify(id);

    var carriers = (raw.carrier_types || []).filter(Boolean);
    if (!carriers.length) carriers = clone(global.TynanArtData.EVENT_SCHEMAS[0].carrier_types);

    var requiredSlots = normalizeSlots(raw.required_slots);
    var optionalSlots = normalizeSlots(raw.optional_slots);

    return {
      id: id,
      label: label,
      category: "自定义类",
      carrier_types: carriers,
      required_slots: requiredSlots,
      optional_slots: optionalSlots,
      simple_fields: buildSimpleFields(requiredSlots, optionalSlots),
      complete_fields: buildCompleteFields(requiredSlots, optionalSlots),
      templates: normalizeTemplates(raw.templates),
    };
  }

  function getCustomEvents() {
    return global.TynanStorage.loadCustomEvents().map(normalizeCustomEvent);
  }

  function saveCustomEvents(events) {
    var normalized = (events || []).map(normalizeCustomEvent);
    global.TynanStorage.saveCustomEvents(normalized);
    return normalized;
  }

  function getAllEvents() {
    return getCustomEvents().concat(clone(global.TynanArtData.EVENT_SCHEMAS));
  }

  function getEventMap() {
    var map = {};
    getAllEvents().forEach(function (item) {
      map[item.id] = item;
    });
    return map;
  }

  function getTemplateMap() {
    var map = clone(global.TynanArtData.TEXT_TEMPLATES.event_templates);
    getCustomEvents().forEach(function (item) {
      map[item.id] = clone(item.templates);
    });
    return map;
  }

  function createBlankCustomEvent() {
    return {
      id: "",
      label: "",
      category: "自定义类",
      carrier_types: clone(global.TynanArtData.EVENT_SCHEMAS[0].carrier_types),
      required_slots: [{ key: "pawn", label: "角色", slot_type: "role", suggestion_type: "person_name" }],
      optional_slots: [{ key: "date_text", label: "日期", slot_type: "meta", suggestion_type: "date_text" }],
      templates: normalizeTemplates({}),
    };
  }

  function cloneFromBaseEvent(eventId) {
    var eventMap = getEventMap();
    var templateMap = getTemplateMap();
    var base = eventMap[eventId];
    if (!base) return createBlankCustomEvent();
    return {
      id: "custom_" + slugify(base.id),
      label: base.label + "（自定义）",
      category: "自定义类",
      carrier_types: clone(base.carrier_types),
      required_slots: clone(base.required_slots),
      optional_slots: clone(base.optional_slots),
      templates: clone(templateMap[base.id] || normalizeTemplates({})),
    };
  }

  global.TynanCatalog = {
    CATEGORY_ORDER: CATEGORY_ORDER,
    slugify: slugify,
    normalizeCustomEvent: normalizeCustomEvent,
    getCustomEvents: getCustomEvents,
    saveCustomEvents: saveCustomEvents,
    getAllEvents: getAllEvents,
    getEventMap: getEventMap,
    getTemplateMap: getTemplateMap,
    createBlankCustomEvent: createBlankCustomEvent,
    cloneFromBaseEvent: cloneFromBaseEvent,
  };
})(window);

// ===== engine.js =====
;(function (global) {
  var EN_TRANSLATION_MAPS = {
    quality: {
      "极差": "awful",
      "较差": "poor",
      "一般": "normal",
      "良好": "good",
      "极佳": "excellent",
      "大师级": "masterwork",
      "传奇级": "legendary"
    },
    material: {
      "钢铁": "steel",
      "钢制": "steel",
      "黄金": "gold",
      "金制": "gold",
      "白银": "silver",
      "银制": "silver",
      "翡翠": "jade",
      "玉制": "jade",
      "玻璃钢": "plasteel",
      "玻璃钢制": "plasteel",
      "活铁": "bioferrite",
      "木材": "wood",
      "木制": "wooden",
      "石制": "stone",
      "花岗岩": "granite",
      "花岗岩制": "granite"
    },
    thing_name: {
      "小雕塑": "small sculpture",
      "大雕塑": "large sculpture",
      "宏伟雕塑": "grand sculpture",
      "扶手椅": "armchair",
      "餐椅": "dining chair",
      "棺材": "sarcophagus",
      "左轮手枪": "revolver"
    },
    object_name: {
      "墙": "wall",
      "栅栏": "fence",
      "书柜": "bookcase",
      "小书柜": "small bookcase",
      "坟墓": "grave",
      "棺材": "sarcophagus",
      "艺创台": "art bench"
    },
    weapon_name: {
      "单分子剑": "monosword",
      "电荷步枪": "charge rifle",
      "左轮手枪": "revolver",
      "宙斯锤": "zeushammer",
      "长剑": "longsword",
      "重型冲锋枪": "heavy SMG",
      "等离子剑": "plasmasword"
    },
    animal_name: {
      "驼鹿": "moose",
      "阿尔法敲击兽": "alpha thrumbo",
      "野猪": "boar",
      "森林狼": "timber wolf",
      "乳齿象": "mastodon",
      "驯鹿": "reindeer",
      "大熊猫": "panda"
    },
    project_name: {
      "微电子基础": "microelectronics",
      "电荷弹": "charged shot",
      "电力": "electricity",
      "星际航行基础": "starflight basics",
      "仿生学": "bionics",
      "简易假体": "prosthetics",
      "深钻井": "deep drilling",
      "精密装配": "fabrication",
      "高级精密装配": "advanced fabrication",
      "低温休眠舱": "cryptosleep casket"
    },
    skill_name: {
      "建造": "construction",
      "艺术": "artistic work",
      "射击": "shooting",
      "格斗": "melee combat",
      "种植": "growing",
      "烹饪": "cooking",
      "医疗": "medicine",
      "研究": "research"
    },
    game_name: {
      "台球桌": "billiards table",
      "象棋桌": "chess table",
      "扑克桌": "poker table",
      "皇家博弈棋": "Game-of-Ur board",
      "投石圈": "hoopstone ring",
      "马蹄钉": "horseshoes pin"
    },
    training_name: {
      "服从": "obedience",
      "搬运": "hauling",
      "救援": "rescue",
      "攻击": "attack",
      "警戒": "guard"
    },
    illness_name: {
      "流感": "flu",
      "疟疾": "malaria",
      "瘟疫": "plague",
      "食物中毒": "food poisoning",
      "感染": "infection",
      "感官纳米机械感染": "sensory mechanites",
      "肌纤维纳米机械感染": "fibrous mechanites"
    }
  };

  var QUALITY_SHORT_MAP = {
    "极差": "极差",
    "较差": "较差",
    "一般": "一般",
    "良好": "良好",
    "极佳": "极佳",
    "大师级": "大师",
    "传奇级": "传奇"
  };

  var LEGACY_SCULPTURE_POOL = ["雕塑", "作品", "艺术品", "雕像"];

  var EN_CARRIER_OPENERS = {
    "雕塑": [
      "This sculpture depicts {main_image_en}.",
      "This sculpture bears a depiction of {main_image_en}.",
      "On this sculpture is a depiction of {main_image_en}."
    ],
    "家具": [
      "This furniture is engraved with a depiction of {main_image_en}.",
      "This furniture bears a depiction of {main_image_en}.",
      "An engraving on this furniture depicts {main_image_en}."
    ],
    "近战武器": [
      "This weapon is engraved with a depiction of {main_image_en}.",
      "This weapon bears a depiction of {main_image_en}.",
      "An engraving on this weapon depicts {main_image_en}."
    ],
    "远程武器": [
      "This weapon is engraved with a depiction of {main_image_en}.",
      "This weapon bears a depiction of {main_image_en}.",
      "An engraving on this weapon depicts {main_image_en}."
    ],
    "棺材": [
      "The sarcophagus is engraved with a depiction of {main_image_en}.",
      "The sarcophagus bears a depiction of {main_image_en}.",
      "An engraving on this sarcophagus depicts {main_image_en}."
    ]
  };

  var EN_CONTEXT_SENTENCES = [
    "This depiction refers to {event_noun_en} on {date_text_en}.",
    "This depiction relates to {event_noun_en} on {date_text_en}.",
    "This depiction tells the story of {event_noun_en} on {date_text_en}."
  ];

  var EN_ART_CONJUNCTIONS = [
    "as an interesting contrast,",
    "rounding out the work,",
    "in addition to that,",
    "strikingly,",
    "provocatively,",
    "besides that,"
  ];

  var EN_ART_EXTRA_CLAUSES = [
    "the image is bordered by abstract shapes",
    "at the edge of the image are several figures",
    "there is a solitary figure in the background",
    "the subjects are in front of a settlement",
    "the lower part of the image is dominated by a rocky outcrop",
    "the scene takes place on the outskirts of a settlement",
    "a standing figure appears near the edge of the image",
    "the whole image is depicted by the careful arrangement of simple shapes"
  ];

  var EN_ART_STYLE_CLAUSES = [
    "the work symbolizes loss",
    "the work is executed in a symbolic style",
    "the work is executed in a classical style",
    "the work has a geometric feeling and a dynamic structure",
    "the overall composition is well-balanced",
    "the image contrasts hope with despair",
    "the work is shaded in hues of red and blue",
    "almost every shape in the image seems to be triangular"
  ];

  function pick(items) {
    return items && items.length ? items[Math.floor(Math.random() * items.length)] : "";
  }

  function shuffle(items) {
    var list = (items || []).slice();
    for (var i = list.length - 1; i > 0; i -= 1) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = list[i];
      list[i] = list[j];
      list[j] = tmp;
    }
    return list;
  }

  function uniqueItems(items) {
    var out = [];
    (items || []).forEach(function (item) {
      if (item !== "" && item && out.indexOf(item) === -1) out.push(item);
    });
    return out;
  }

  function nextFromPool(key, items, state) {
    if (!items || !items.length) return "";
    if (!state[key] || !state[key].length) state[key] = shuffle(items);
    return state[key].pop();
  }

  function renderTemplate(template, mapping) {
    return String(template || "").replace(/\{([^}]+)\}/g, function (_match, key) {
      return Object.prototype.hasOwnProperty.call(mapping, key) ? mapping[key] : "";
    });
  }

  function deepClone(value) {
    return JSON.parse(JSON.stringify(value || {}));
  }

  function normalizeThingLabel(name, material) {
    name = String(name || "").trim();
    material = String(material || "").trim();
    if (!name) return "";
    if (!material) return name;
    var prefix = material.endsWith("制") ? material : material + "制";
    if (name.indexOf(material) !== -1 || name.indexOf(prefix) !== -1) return name;
    return prefix + name;
  }

  function buildItemPhrase(name, quality, material) {
    name = String(name || "").trim();
    quality = String(quality || "").trim();
    material = String(material || "").trim();
    if (!name) return "一件作品";
    var normalized = normalizeThingLabel(name, material);
    return quality ? quality + "的" + normalized : normalized;
  }

  function wrapBookTitle(name) {
    name = String(name || "").trim();
    if (!name) return "《无题之书》";
    if (/^《.*》$/.test(name)) return name;
    return "《" + name + "》";
  }

  function wrapEnglishBookTitle(name) {
    name = String(name || "").trim();
    if (!name) return "\"Untitled Book\"";
    if (/^".*"$/.test(name)) return name;
    return "\"" + name + "\"";
  }

  function ensureSentence(text) {
    var cleaned = String(text || "").trim();
    if (!cleaned) return "";
    return /[。！？]$/.test(cleaned) ? cleaned : cleaned + "。";
  }

  function ensureEnglishSentence(text) {
    var cleaned = String(text || "").trim();
    if (!cleaned) return "";
    cleaned = cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
    return /[.!?]$/.test(cleaned) ? cleaned : cleaned + ".";
  }

  function normalizeOutput(text) {
    return String(text || "")
      .replace(/\s+/g, "")
      .replace(/，。/g, "。")
      .replace(/。{2,}/g, "。")
      .replace(/，{2,}/g, "，")
      .replace(/([，。！？])\1+/g, "$1")
      .replace(/([，。！？])([，。！？])/g, function (_match, a, b) {
        return a === "。" || b === "。" ? "。" : a;
      })
      .replace(/^，+|，+$/g, "");
  }

  function escapeRegExp(text) {
    return String(text || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function replaceMany(text, replacements) {
    var output = String(text || "");
    (replacements || []).forEach(function (pair) {
      output = output.replace(pair[0], pair[1]);
    });
    return output;
  }

  function replaceQuantityWithWordPool(text, words, unitMap, minLength) {
    var output = String(text || "");
    var mapping = unitMap || {};
    var requiredLength = Math.max(1, Number(minLength || 1));
    (words || []).forEach(function (word) {
      if (!word) return;
      if (String(word).length < requiredLength) return;
      Object.keys(mapping).forEach(function (from) {
        output = output.replace(new RegExp(escapeRegExp(from + word), "g"), mapping[from] + word);
      });
    });
    return output;
  }

  function replaceLargeAnimalPhrases(text, adjectives, animals) {
    var output = String(text || "");
    (adjectives || []).forEach(function (adjective) {
      if (!adjective) return;
      (animals || []).forEach(function (animal) {
        if (!animal) return;
        output = output.replace(
          new RegExp("一" + escapeRegExp(adjective) + escapeRegExp(animal), "g"),
          "一只" + adjective + "的" + animal
        );
      });
    });
    return output;
  }

  function cleanChineseGeneratedText(text) {
    var cleaned = String(text || "");
    var wordPools =
      (global.TynanArtData &&
        global.TynanArtData.TEXT_TEMPLATES &&
        global.TynanArtData.TEXT_TEMPLATES.art_word_pools) ||
      {};

    cleaned = replaceMany(cleaned, [
      [/这件(?:展示|表现|描述|塑造|刻画|描绘)描述了/g, "这件作品描述了"],
      [/(?:展示|表现|描述|塑造|刻画|描绘)中所引述的故事/g, "图像中所引述的故事"],
      [/(?:展示|表现|描述|塑造|刻画|描绘)记述了/g, "这件作品记述了"],
      [/向我们塑造了/g, "向我们展示了"],
      [/上塑造了/g, "上描绘了"],
      [/几位旁观者们/g, "几位旁观者"],
      [/([他她TＡA]{1,2}的)在最喜欢的书房里放松/g, "在$1最喜欢的书房里放松"],
      [/几件风雪帽/g, "几顶风雪帽"],
      [/数件风雪帽/g, "数顶风雪帽"],
      [/一些风雪帽/g, "一些风雪帽"],
      [/数只风雪帽/g, "数顶风雪帽"],
      [/头上带着几顶风雪帽/g, "头上戴着几顶风雪帽"],
      [/头上带着数顶风雪帽/g, "头上戴着数顶风雪帽"],
      [/头上带着一些风雪帽/g, "头上戴着一些风雪帽"]
    ]);

    cleaned = replaceQuantityWithWordPool(cleaned, wordPools.Animal, {
      "几位": "几只",
      "数位": "数只",
      "数个": "数只"
    });
    cleaned = replaceQuantityWithWordPool(cleaned, wordPools.Vegetable, {
      "几位": "几株",
      "数位": "数株",
      "数个": "数株"
    });
    cleaned = replaceQuantityWithWordPool(cleaned, wordPools.Weapon, {
      "几位": "几件",
      "数位": "数件",
      "数个": "数件"
    }, 2);
    cleaned = replaceQuantityWithWordPool(cleaned, wordPools.Apparel, {
      "几位": "几件",
      "数位": "数件",
      "数个": "数件"
    }, 2);
    cleaned = replaceQuantityWithWordPool(cleaned, wordPools.Shape, {
      "几位": "几个",
      "数位": "数个"
    }, 2);
    cleaned = replaceLargeAnimalPhrases(cleaned, wordPools.AdjectiveLarge, wordPools.Animal);

    return normalizeOutput(cleaned);
  }

  function normalizeEnglishOutput(text) {
    return String(text || "")
      .replace(/\s+/g, " ")
      .replace(/\s+([,.!?;:])/g, "$1")
      .replace(/([,.!?])\1+/g, "$1")
      .trim();
  }

  function translateByType(type, value) {
    value = String(value || "").trim();
    if (!value) return "";
    if (EN_TRANSLATION_MAPS[type] && EN_TRANSLATION_MAPS[type][value]) return EN_TRANSLATION_MAPS[type][value];
    var found = "";
    Object.keys(EN_TRANSLATION_MAPS).some(function (key) {
      if (EN_TRANSLATION_MAPS[key][value]) {
        found = EN_TRANSLATION_MAPS[key][value];
        return true;
      }
      return false;
    });
    return found || value;
  }

  function withArticle(text) {
    text = String(text || "").trim();
    if (!text) return "something";
    if (/^(a|an|the)\s/i.test(text)) return text;
    return /^[aeiou]/i.test(text) ? "an " + text : "a " + text;
  }

  function buildEnglishItemPhrase(name, quality, material) {
    name = String(name || "").trim();
    quality = String(quality || "").trim();
    material = String(material || "").trim();
    if (!name) return "an item";
    var parts = [];
    if (quality) parts.push(quality);
    if (material) parts.push(material);
    parts.push(name);
    return withArticle(parts.join(" "));
  }

  function getArtGrammarPools(bundle) {
    var pools = (bundle && bundle.TEXT_TEMPLATES && bundle.TEXT_TEMPLATES.art_grammar_pools) || {};
    if (!pools.__word_pools) pools.__word_pools = getArtWordPools(bundle);
    return pools;
  }

  function getArtWordPools(bundle) {
    return (bundle && bundle.TEXT_TEMPLATES && bundle.TEXT_TEMPLATES.art_word_pools) || {};
  }

  function resolveRuleTokens(text, localPools, globalPools, selectionState, depth) {
    if (depth > 10) return String(text || "");
    return String(text || "").replace(/\[([^\]]+)\]/g, function (_match, rawKey) {
      var key = String(rawKey || "").replace(/\(.*?\)/g, "").trim();
      var pool = (localPools && localPools[key]) || (globalPools && globalPools[key]) || null;
      if ((!pool || !pool.length) && key === "circumstance_group" && localPools && localPools.circumstance_phrase) {
        pool = localPools.circumstance_phrase;
      }
      if ((!pool || !pool.length) && globalPools && globalPools.__word_pools && globalPools.__word_pools[key]) {
        pool = globalPools.__word_pools[key];
      }
      if (!pool || !pool.length) return "";
      return resolveRuleTokens(nextFromPool("grammar_" + key, pool, selectionState), localPools, globalPools, selectionState, depth + 1);
    });
  }

  function buildEnglishDateText(dateText) {
    var text = String(dateText || "").trim();
    var quadrumMap = { "翠象": "Aprimay", "赫象": "Jugust", "荼象": "Septober", "素象": "Decembary" };
    var match = text.match(/^(\d+)年(翠象|赫象|荼象|素象)(\d+)日$/);
    if (!match) return text || "an unknown date";
    var day = Number(match[3]);
    var suffix = "th";
    if (day % 100 < 11 || day % 100 > 13) {
      if (day % 10 === 1) suffix = "st";
      else if (day % 10 === 2) suffix = "nd";
      else if (day % 10 === 3) suffix = "rd";
    }
    return day + suffix + " of " + (quadrumMap[match[2]] || match[2]) + ", " + match[1];
  }

  function subjectPronoun(raw) {
    var pronoun = String(raw || "").trim() || "TA";
    return pronoun.endsWith("的") ? pronoun.slice(0, -1) : pronoun;
  }

  function possessivePronoun(raw) {
    var pronoun = String(raw || "").trim() || "TA";
    return pronoun.endsWith("的") ? pronoun : pronoun + "的";
  }

  function englishPronouns(raw) {
    var pronoun = subjectPronoun(raw);
    if (pronoun === "她") return { subject: "she", object: "her", possessive: "her" };
    if (pronoun === "他") return { subject: "he", object: "him", possessive: "his" };
    return { subject: "they", object: "them", possessive: "their" };
  }

  function setObjectForms(mapping, key, rawValue, labelValue, englishValue, qualityShort, material) {
    var raw = String(rawValue || "").trim();
    var label = String(labelValue || rawValue || "").trim();
    var english = String(englishValue || raw || "").trim();
    mapping[key + "_name"] = raw;
    mapping[key + "_label"] = label;
    mapping[key + "_display"] = label;
    mapping[key + "_definite"] = label;
    mapping[key + "_indefinite"] = label;
    mapping[key + "_nameDef"] = label;
    mapping[key + "_nameFull"] = label;
    mapping[key + "_nameIndef"] = label;
    mapping[key + "_shortNameDef"] = label;
    mapping[key + "_title"] = raw;
    mapping[key + "_quality"] = qualityShort;
    mapping[key + "_stuffLabel"] = String(material || "").trim();
    mapping[key] = label;

    mapping[key + "_name_en"] = english;
    mapping[key + "_label_en"] = english;
    mapping[key + "_definite_en"] = english;
    mapping[key + "_indefinite_en"] = english;
  }

  function buildMapping(schema, context, bundle) {
    var mapping = {};
    var roleOrder = [];
    var allSlots = schema.required_slots.concat(schema.optional_slots);
    var quality = String(context.quality || "").trim() || pick(bundle.SLOT_SUGGESTIONS.quality || [""]);
    var qualityShort = QUALITY_SHORT_MAP[quality] || quality;
    var material = String(context.material || "").trim();
    var title = String(context.title || "").trim();

    allSlots.forEach(function (slot) {
      if (slot.slot_type === "role") {
        var role = context.roles[slot.key] || {};
        var name = String(role.name || "").trim();
        var honorific = String(role.title || "").trim();
        var pronounRaw = String(role.pronoun || "").trim() || pick(bundle.SLOT_SUGGESTIONS.pronoun || ["TA"]);
        var display = (honorific ? honorific : "") + (name ? name : "");
        var subject = subjectPronoun(pronounRaw);
        var possessive = possessivePronoun(pronounRaw);
        var english = englishPronouns(pronounRaw);
        var displaySafe = display || name || subject;

        mapping[slot.key + "_name"] = name || displaySafe;
        mapping[slot.key + "_display"] = displaySafe;
        mapping[slot.key + "_pronoun"] = subject;
        mapping[slot.key + "_possessive"] = possessive;
        mapping[slot.key + "_objective"] = subject;
        mapping[slot.key + "_label"] = displaySafe;
        mapping[slot.key + "_nameFull"] = displaySafe;
        mapping[slot.key + "_nameDef"] = displaySafe;
        mapping[slot.key + "_nameIndef"] = displaySafe;
        mapping[slot.key + "_shortNameDef"] = displaySafe;
        mapping[slot.key + "_factionName"] = "某个派系";

        mapping[slot.key + "_name_en"] = name || "someone";
        mapping[slot.key + "_display_en"] = name || "someone";
        mapping[slot.key + "_pronoun_en"] = english.subject;
        mapping[slot.key + "_possessive_en"] = english.possessive;
        mapping[slot.key + "_objective_en"] = english.object;
        mapping[slot.key + "_nameFull_en"] = name || "someone";
        mapping[slot.key + "_nameDef_en"] = name || "someone";

        roleOrder.push(slot.key);
      } else if (slot.slot_type === "object") {
        var rawObject =
          String(context.objects[slot.key] || "").trim() ||
          pick(bundle.SLOT_SUGGESTIONS[slot.suggestion_type] || [""]);
        var label = rawObject;
        if (slot.key === "thing") label = normalizeThingLabel(rawObject, material);
        var englishObject = translateByType(slot.suggestion_type, rawObject) || rawObject;
        setObjectForms(mapping, slot.key, rawObject, label, englishObject, qualityShort, material);
      }
    });

    mapping.quality = quality;
    mapping.quality_short = qualityShort;
    mapping.quality_en = translateByType("quality", quality) || quality;
    mapping.material = material;
    mapping.material_en = translateByType("material", material) || material;
    mapping.title = title;
    mapping.date_text = String(context.date_text || "").trim() || pick(bundle.SLOT_SUGGESTIONS.date_text || ["某年某象某日"]);
    mapping.date_text_en = buildEnglishDateText(mapping.date_text);
    mapping.scene_text = String(context.scene_hint || "").trim();
    mapping.scene_fragment = mapping.scene_text ? "，" + mapping.scene_text : "";
    mapping.DATE = mapping.date_text;

    if (mapping.thing_name || title) {
      var thingLabel = mapping.thing_label || normalizeThingLabel(mapping.thing_name || "", material);
      mapping.thing_label = thingLabel;
      mapping.thing_definite = thingLabel;
      mapping.thing_indefinite = thingLabel;
      mapping.thing_nameDef = thingLabel;
      mapping.thing_nameFull = thingLabel;
      mapping.thing_title = title || mapping.thing_name || thingLabel;
      mapping.thing_quality = qualityShort;
      mapping.thing_phrase = thingLabel || buildItemPhrase(mapping.thing_name || "", quality, material);
      mapping.thing_phrase_en = buildEnglishItemPhrase(
        translateByType("thing_name", mapping.thing_name || mapping.thing_label || "item") || mapping.thing_name || mapping.thing_label || "item",
        mapping.quality_en,
        mapping.material_en
      );
    } else {
      mapping.thing_phrase = buildItemPhrase("", quality, material);
      mapping.thing_phrase_en = "an item";
    }

    if (mapping.object_name) {
      mapping.object_phrase = mapping.object_label || mapping.object_name;
      mapping.object_phrase_en = buildEnglishItemPhrase(
        translateByType("object_name", mapping.object_name) || mapping.object_name,
        "",
        ""
      );
    } else {
      mapping.object_phrase = "";
      mapping.object_phrase_en = "an object";
    }

    if (mapping.book_name) {
      mapping.book_title = wrapBookTitle(mapping.book_name);
      mapping.book_display = mapping.book_title;
      mapping.book_display_en = wrapEnglishBookTitle(translateByType("book_title", mapping.book_name) || mapping.book_name);
    } else {
      mapping.book_display = wrapBookTitle("");
      mapping.book_display_en = wrapEnglishBookTitle("");
    }

    mapping.weapon_name = mapping.weapon_name || "";
    mapping.weapon_label = mapping.weapon_label || mapping.weapon_name;
    mapping.weapon_phrase = mapping.weapon_label ? "一把" + mapping.weapon_label : "一把武器";
    mapping.weapon_phrase_en = buildEnglishItemPhrase(mapping.weapon_label || "weapon", "", "");
    mapping.project_name = mapping.project_name || "";
    mapping.animal_name = mapping.animal_name || "";
    mapping.training_name = mapping.training_name || "";
    mapping.skill_name = mapping.skill_name || "";
    mapping.material_name = mapping.material_name || material;
    mapping.game_name = mapping.game_name || "";
    mapping.illness_name = mapping.illness_name || "";
    mapping.game = mapping.game_label || mapping.game_name || "";
    mapping.weapon = mapping.weapon_label || mapping.weapon_name || "";

    mapping.project_name_en = translateByType("project_name", mapping.project_name) || mapping.project_name;
    mapping.animal_name_en = translateByType("animal_name", mapping.animal_name) || mapping.animal_name || "an animal";
    mapping.training_name_en = translateByType("training_name", mapping.training_name) || mapping.training_name || "training";
    mapping.skill_name_en = translateByType("skill_name", mapping.skill_name) || mapping.skill_name || "a skill";
    mapping.material_name_en = translateByType("material_name", mapping.material_name) || mapping.material_name || "a material";
    mapping.game_name_en = translateByType("game_name", mapping.game_name) || mapping.game_name || "a game";
    mapping.illness_name_en = translateByType("illness_name", mapping.illness_name) || mapping.illness_name || "an illness";
    mapping.primary_role_display_en = roleOrder.length ? mapping[roleOrder[0] + "_display_en"] : "someone";
    mapping.primary_role_display = roleOrder.length ? mapping[roleOrder[0] + "_display"] : "某人";
    return mapping;
  }

  function validateContext(schema, context) {
    if (schema.carrier_types.indexOf(context.carrier_type) === -1) {
      throw new Error("载体类型“" + context.carrier_type + "”不适用于事件“" + schema.label + "”。");
    }
    if (context.variant_count < 1 || context.variant_count > 5) {
      throw new Error("生成数量必须在 1 到 5 之间。");
    }
    schema.required_slots.forEach(function (slot) {
      if (slot.slot_type === "role" && !(context.roles[slot.key] && context.roles[slot.key].name)) {
        throw new Error("请填写必填角色：" + slot.label);
      }
      if (slot.slot_type === "object" && !context.objects[slot.key]) {
        throw new Error("请填写必填对象：" + slot.label);
      }
    });
  }

  function prepareRootPools(localPools, context, mapping, bundle, includeContext, hasDetail, hasStyle) {
    localPools.physical_description_root = (bundle.TEXT_TEMPLATES.carrier_openers[context.carrier_type] || []).slice();
    localPools.context_sentence = (bundle.TEXT_TEMPLATES.context_sentences || []).slice();
    localPools.DATE = [mapping.date_text];
    if (context.carrier_type === "雕塑" && (!localPools.sculpture || !localPools.sculpture.length)) {
      localPools.sculpture = LEGACY_SCULPTURE_POOL.slice();
    }
    if (hasDetail && hasStyle) localPools.desc_sentence_group = ["[desc_sentence][style_group]"];
    else if (hasDetail) localPools.desc_sentence_group = ["[desc_sentence]"];
    else if (hasStyle) localPools.desc_sentence_group = ["[style_group]"];
    else localPools.desc_sentence_group = [""];
    localPools.r_art_description = [includeContext ? "[physical_description_root][context_sentence]" : "[physical_description_root]"];
  }

  function renderChineseFromPools(localPools, mapping, bundle, selectionState) {
    var rootRule = nextFromPool("cn_root_rule", localPools.r_art_description || ["[physical_description_root]"], selectionState);
    var resolved = resolveRuleTokens(rootRule, localPools, getArtGrammarPools(bundle), selectionState, 0);
    return cleanChineseGeneratedText(renderTemplate(resolved, mapping));
  }

  function buildGrammarLocalPools(schema, context, mapping, eventPack, bundle) {
    var localPools = deepClone(eventPack.grammar_pools);
    if (context.scene_hint) localPools.circumstance_phrase = [String(context.scene_hint).trim()];
    if (!localPools.circumstance_group && localPools.circumstance_phrase) localPools.circumstance_group = localPools.circumstance_phrase.slice();
    if (localPools.title_sentence && !mapping.title) localPools.title_sentence = [""];
    if (localPools.quality_sentence && !mapping.quality) localPools.quality_sentence = [""];
    if (context.detail_hint) localPools.desc_sentence = [ensureSentence(context.detail_hint)];
    if (context.style_hint) localPools.style_group = [ensureSentence(context.style_hint)];
    var hasDetail = !!(context.include_detail && localPools.desc_sentence && localPools.desc_sentence.some(Boolean));
    var hasStyle = !!(context.style_hint || context.include_style);
    if (!context.include_detail && !context.detail_hint) localPools.desc_sentence = [""];
    if (!hasStyle) localPools.style_group = [""];
    prepareRootPools(localPools, context, mapping, bundle, !!context.include_context, hasDetail, hasStyle);
    return localPools;
  }

  function buildLegacyLocalPools(schema, context, mapping, eventPack, bundle, selectionState) {
    var localPools = {};
    var detailCandidates = uniqueItems((eventPack.detail_sentences || []).concat(bundle.TEXT_TEMPLATES.default_detail_sentences || []));
    var styleCandidates = uniqueItems((eventPack.style_sentences || []).concat(bundle.TEXT_TEMPLATES.default_style_sentences || []));
    localPools.image = [nextFromPool(schema.id + "_legacy_image", eventPack.main_images || [], selectionState)];
    if (context.include_context && eventPack.event_nouns && eventPack.event_nouns.length) {
      localPools.tale_noun = [nextFromPool(schema.id + "_legacy_noun", eventPack.event_nouns, selectionState)];
    }
    if (context.detail_hint) localPools.desc_sentence = [ensureSentence(context.detail_hint)];
    else if (context.include_detail && detailCandidates.length) localPools.desc_sentence = [ensureSentence(nextFromPool(schema.id + "_legacy_detail", detailCandidates, selectionState))];
    else localPools.desc_sentence = [""];
    if (context.style_hint) localPools.style_group = [ensureSentence(context.style_hint)];
    else if (context.include_style && styleCandidates.length) localPools.style_group = [ensureSentence(nextFromPool(schema.id + "_legacy_style", styleCandidates, selectionState))];
    else localPools.style_group = [""];
    prepareRootPools(
      localPools,
      context,
      mapping,
      bundle,
      !!context.include_context && !!localPools.tale_noun,
      !!(localPools.desc_sentence && localPools.desc_sentence[0]),
      !!(localPools.style_group && localPools.style_group[0])
    );
    return localPools;
  }

  function buildGenericEnglishEventPhrase(schema, mapping) {
    var actionMap = {
      crafted_art: "crafting",
      finished_construction: "completing construction on",
      finished_research: "researching",
      read_book: "reading",
      recruit_joiner: "recruiting",
      tame_animal: "taming",
      train_animal: "training",
      marriage: "marrying",
      wound: "wounding",
      kill: "killing",
      meditate: "meditating",
      pray: "praying",
      burial: "burying",
      party: "attending a party",
      skill_mastery: "mastering",
      insult: "fighting with someone",
      escape_pod: "landing in a drop pod",
      berserk_break: "falling into berserk rage",
      despair_break: "giving up",
      caravan_departure: "forming a caravan",
      surgery: "performing surgery on",
      birth: "giving birth to",
      mine_vein: "mining",
      game_play: "playing",
      drunkenness: "getting drunk",
      fire_panic: "being on fire",
      nude_wander: "wandering nude",
      grave_visit: "visiting a grave",
      hunt_animal: "hunting",
      capture_prisoner: "capturing",
      execution: "executing",
      kidnap: "kidnapping",
      cryptosleep_enter: "entering cryptosleep",
      cryptosleep_place: "placing someone into cryptosleep",
      lover_union: "becoming lovers with",
      breakup: "breaking up with",
      animal_bond: "forming a bond with",
      trade_deal: "trading with",
      strip_target: "stripping",
      snowman_build: "building a snowman",
      meteorite_impact: "witnessing a meteorite impact",
      toxic_fallout: "enduring toxic fallout",
      aurora: "watching an aurora",
      flashstorm: "facing a flashstorm",
      insect_infestation: "facing an infestation",
      manhunter_pack: "facing a manhunter pack",
      heatstroke: "suffering heatstroke",
      hypothermia: "suffering hypothermia",
      exhaustion_collapse: "collapsing from exhaustion",
      cannibalism: "eating human meat",
      tox_buildup: "suffering toxic buildup",
      message_received: "receiving a mysterious message",
      eclipse: "witnessing an eclipse",
      tornado: "facing a tornado",
      vomit: "vomiting",
      cavein_escape: "dodging a collapse",
      caravan_ambush: "being ambushed on a caravan journey",
      ship_chunk_crash: "witnessing a ship part crash",
      volcanic_winter: "enduring volcanic winter",
      disease_onset: "falling ill",
      recruit_failure: "failing to recruit someone",
      animal_revenge: "facing animal revenge"
    };
    var subject = mapping.primary_role_display_en || "someone";
    var objectPhrase =
      (mapping.thing_name ? mapping.thing_phrase_en : "") ||
      (mapping.object_name ? mapping.object_phrase_en : "") ||
      (mapping.book_name ? mapping.book_display_en : "") ||
      (mapping.weapon_name ? mapping.weapon_phrase_en : "") ||
      (mapping.animal_name ? mapping.animal_name_en : "") ||
      (mapping.project_name ? mapping.project_name_en : "") ||
      (mapping.skill_name ? mapping.skill_name_en : "") ||
      (mapping.game_name ? mapping.game_name_en : "") ||
      (mapping.illness_name ? mapping.illness_name_en : "") ||
      "";
    var action = actionMap[schema.id] || schema.id.replace(/_/g, " ");
    if (schema.id === "finished_construction" && mapping.object_name) action += " " + mapping.object_phrase_en;
    else if (schema.id === "game_play" && mapping.game_name_en) action = "playing at " + withArticle(mapping.game_name_en);
    else if (schema.id === "mine_vein" && mapping.material_name_en) action += " " + mapping.material_name_en;
    else if (schema.id === "skill_mastery" && mapping.skill_name_en) action += " " + mapping.skill_name_en;
    else if (schema.id === "tame_animal" && mapping.animal_name_en) action += " " + mapping.animal_name_en;
    else if (schema.id === "train_animal" && mapping.animal_name_en) action += " " + mapping.animal_name_en;
    else if (schema.id === "disease_onset" && mapping.illness_name_en) action += " with " + mapping.illness_name_en;
    else if (objectPhrase && /crafting|researching|reading|performing surgery on|giving birth to|playing|mastering/.test(action)) action += " " + objectPhrase;
    return (subject + " " + action).trim();
  }

  function buildEnglishDescriptionGroup(selectionState) {
    var extra = nextFromPool("en_extra_clause", EN_ART_EXTRA_CLAUSES, selectionState);
    var style = nextFromPool("en_style_clause", EN_ART_STYLE_CLAUSES, selectionState);
    var conjunction = nextFromPool("en_art_conjunction", EN_ART_CONJUNCTIONS, selectionState);
    var pattern = nextFromPool("en_style_group_pattern", ["extra_style", "style_extra", "style_only", "extra_only", "empty"], selectionState);
    if (pattern === "extra_style") return ensureEnglishSentence(extra) + " " + ensureEnglishSentence(style);
    if (pattern === "style_extra") return ensureEnglishSentence(style) + " " + ensureEnglishSentence(conjunction + " " + extra);
    if (pattern === "style_only") return ensureEnglishSentence(style);
    if (pattern === "extra_only") return ensureEnglishSentence(extra);
    return "";
  }

  function generateEnglishReference(schema, context, mapping, selectionState) {
    var carrierOpeners = EN_CARRIER_OPENERS[context.carrier_type] || EN_CARRIER_OPENERS["雕塑"];
    var mainImage = buildGenericEnglishEventPhrase(schema, mapping);
    var opening = renderTemplate(nextFromPool("en_carrier_" + context.carrier_type, carrierOpeners, selectionState), {
      main_image_en: mainImage
    });
    var englishParts = [ensureEnglishSentence(opening)];
    var descGroup = buildEnglishDescriptionGroup(selectionState);
    if (descGroup) englishParts.push(descGroup);
    if (context.include_context) {
      var contextText = renderTemplate(nextFromPool("en_context_sentence", EN_CONTEXT_SENTENCES, selectionState), {
        event_noun_en: buildGenericEnglishEventPhrase(schema, mapping),
        date_text_en: mapping.date_text_en
      });
      englishParts.push(ensureEnglishSentence(contextText));
    }
    return normalizeEnglishOutput(englishParts.join(" "));
  }

  function dedupeSignature(text) {
    return String(text || "").replace(/[，。！？；：“”《》、\s]/g, "");
  }

  function generateSingle(schema, context, templateMap, bundle, selectionState) {
    var eventPack = templateMap[schema.id];
    var mapping = buildMapping(schema, context, bundle);
    var localPools =
      eventPack.grammar_pools && eventPack.grammar_pools.image && eventPack.grammar_pools.tale_noun
        ? buildGrammarLocalPools(schema, context, mapping, eventPack, bundle)
        : buildLegacyLocalPools(schema, context, mapping, eventPack, bundle, selectionState);
    var chinese = renderChineseFromPools(localPools, mapping, bundle, selectionState);
    var english = generateEnglishReference(schema, context, mapping, selectionState);
    return {
      chinese: chinese,
      english: english,
      text: chinese + (english ? "\n\n[English Reference]\n" + english : "")
    };
  }

  function generate(context, bundle) {
    var schema = bundle.eventMap[context.event_id];
    validateContext(schema, context);
    var count = Math.max(1, Math.min(5, Number(context.variant_count || 1)));
    var results = [];
    var seen = {};
    var attempts = 0;
    var selectionState = {};
    while (results.length < count && attempts < count * 30) {
      attempts += 1;
      var generated = generateSingle(schema, context, bundle.templateMap, bundle, selectionState);
      var signature = dedupeSignature(generated.chinese + generated.english);
      if (seen[signature]) continue;
      seen[signature] = true;
      results.push({
        text: generated.text,
        chinese: generated.chinese,
        english: generated.english,
        event_id: schema.id
      });
    }
    if (!results.length) {
      throw new Error("未能生成可用文本，请检查输入内容。");
    }
    return results;
  }

  global.TynanEngine = {
    renderTemplate: renderTemplate,
    buildItemPhrase: buildItemPhrase,
    normalizeOutput: normalizeOutput,
    generate: generate,
  };
})(window);


// ===== index.js =====
;(function (global) {
  var data = global.TynanArtData;
  var THEME_META = {
    light: "#eef2f7",
    dark: "#0f172a",
  };

  var refs = {
    tabs: document.querySelectorAll(".view-tab"),
    sections: document.querySelectorAll(".view-section"),
    themeToggleBtn: document.querySelector("#themeToggleBtn"),
    themeMeta: document.querySelector('meta[name="theme-color"]'),
    themeTransitionOverlay: document.querySelector("#themeTransitionOverlay"),
    toastContainer: document.querySelector("#toastContainer"),
    clearCookieBtn: document.querySelector("#clearCookieBtn"),
    openPresetBtn: document.querySelector("#openPresetBtn"),
    closePresetBtn: document.querySelector("#closePresetBtn"),
    presetModal: document.querySelector("#presetModal"),
    presetList: document.querySelector("#presetList"),
    presetName: document.querySelector("#presetName"),
    presetTitle: document.querySelector("#presetTitle"),
    presetPronoun: document.querySelector("#presetPronoun"),
    roleTitleList: document.querySelector("#roleTitleList"),
    carrierSelect: document.querySelector("#carrierSelect"),
    variantSelect: document.querySelector("#variantSelect"),
    showEnglishToggle: document.querySelector("#showEnglishToggle"),
    eventSearch: document.querySelector("#eventSearch"),
    eventList: document.querySelector("#eventList"),
    formContainer: document.querySelector("#formContainer"),
    resultsContainer: document.querySelector("#resultsContainer"),
    generateBtn: document.querySelector("#generateBtn"),
    clearFormBtn: document.querySelector("#clearFormBtn"),
    copyAllBtn: document.querySelector("#copyAllBtn"),
  };

  var state = {
    view: "generator",
    presets: [],
    selectedPresetName: "",
    mode: "simple",
    eventId: "",
    carrier: "",
    showEnglishReference: false,
    formRefs: {},
    suggestRefs: {},
    results: [],
    themeAnimating: false,
  };

  init();

  function init() {
    refs.roleTitleList.innerHTML = data.SLOT_SUGGESTIONS.role_title
      .map(function (item) {
        return '<option value="' + esc(item) + '"></option>';
      })
      .join("");
    refs.presetPronoun.innerHTML = data.SLOT_SUGGESTIONS.pronoun
      .map(function (item) {
        return '<option value="' + esc(item) + '">' + esc(item) + "</option>";
      })
      .join("");
    refs.presetPronoun.value = "TA";
    refs.variantSelect.value = "4";
    refs.showEnglishToggle.checked = false;
    state.presets = TynanStorage.loadPresets();

    var first = TynanCatalog.getAllEvents()[0];
    state.eventId = first ? first.id : "";
    state.carrier = first ? first.carrier_types[0] : "";

    bind();
    applyTheme(TynanStorage.loadTheme());
    renderPresetList();
    renderEventList();
    renderForm();
    renderResults([]);
  }

  function bind() {
    Array.prototype.forEach.call(refs.tabs, function (tab) {
      tab.addEventListener("click", function () {
        switchView(tab.getAttribute("data-view"));
      });
    });

    document.addEventListener("click", function (event) {
      if (!event.target.closest(".suggest-field")) closeAllSuggestMenus();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !refs.presetModal.classList.contains("hidden")) {
        closePresetModal();
      }
    });

    refs.themeToggleBtn.addEventListener("click", function (event) {
      toggleTheme(event);
    });
    refs.clearCookieBtn.addEventListener("click", clearCookies);

    refs.openPresetBtn.addEventListener("click", openPresetModal);
    refs.closePresetBtn.addEventListener("click", closePresetModal);
    refs.presetModal.addEventListener("click", function (event) {
      if (event.target === refs.presetModal) closePresetModal();
    });

    document.querySelector("#savePresetBtn").addEventListener("click", savePreset);
    document.querySelector("#deletePresetBtn").addEventListener("click", deletePreset);
    document.querySelector("#clearPresetBtn").addEventListener("click", clearPresetInputs);

    Array.prototype.forEach.call(document.querySelectorAll('input[name="mode"]'), function (node) {
      node.addEventListener("change", function () {
        var checked = document.querySelector('input[name="mode"]:checked');
        state.mode = checked ? checked.value : "simple";
        renderForm();
      });
    });

    refs.carrierSelect.addEventListener("change", function () {
      state.carrier = refs.carrierSelect.value;
    });
    refs.eventSearch.addEventListener("input", renderEventList);
    refs.showEnglishToggle.addEventListener("change", function () {
      state.showEnglishReference = !!refs.showEnglishToggle.checked;
      renderResults(state.results);
    });
    refs.generateBtn.addEventListener("click", generateResults);
    refs.clearFormBtn.addEventListener("click", clearForm);
    refs.copyAllBtn.addEventListener("click", copyAllResults);

    global.addEventListener("tynan-presets-updated", function () {
      state.presets = TynanStorage.loadPresets();
      renderPresetList();
      renderForm();
    });
    global.addEventListener("tynan-custom-events-updated", function () {
      ensureActiveEventExists();
      renderEventList();
      renderForm();
    });
  }

  function switchView(view) {
    state.view = view;
    Array.prototype.forEach.call(refs.tabs, function (tab) {
      tab.classList.toggle("active", tab.getAttribute("data-view") === view);
    });
    Array.prototype.forEach.call(refs.sections, function (section) {
      section.classList.toggle("active", section.id === "view-" + view);
    });
  }

  function applyTheme(theme) {
    var current = theme === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = current;
    var nextLabel = current === "dark" ? "切换到日间模式" : "切换到夜间模式";
    refs.themeToggleBtn.setAttribute("aria-label", nextLabel);
    refs.themeToggleBtn.setAttribute("title", nextLabel);
    refs.themeToggleBtn.setAttribute("aria-pressed", current === "dark" ? "true" : "false");
    if (refs.themeMeta) refs.themeMeta.setAttribute("content", THEME_META[current]);
  }

  function toggleTheme(sourceEvent) {
    if (state.themeAnimating) return;
    var next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    if (!canAnimateTheme()) {
      TynanStorage.saveTheme(next);
      applyTheme(next);
      return;
    }
    runThemeTransition(next, sourceEvent);
  }

  function canAnimateTheme() {
    return !!(
      refs.themeTransitionOverlay &&
      global.CSS &&
      CSS.supports &&
      CSS.supports("clip-path", "circle(20px at 20px 20px)")
    );
  }

  function runThemeTransition(nextTheme, sourceEvent) {
    var overlay = refs.themeTransitionOverlay;
    var root = document.documentElement;
    var buttonRect = refs.themeToggleBtn.getBoundingClientRect();
    var pointX = sourceEvent && typeof sourceEvent.clientX === "number" ? sourceEvent.clientX : buttonRect.left + buttonRect.width / 2;
    var pointY = sourceEvent && typeof sourceEvent.clientY === "number" ? sourceEvent.clientY : buttonRect.top + buttonRect.height / 2;
    var radius = Math.ceil(
      Math.sqrt(
        Math.pow(Math.max(pointX, global.innerWidth - pointX), 2) +
          Math.pow(Math.max(pointY, global.innerHeight - pointY), 2)
      )
    );

    state.themeAnimating = true;
    refs.themeToggleBtn.disabled = true;
    overlay.dataset.theme = nextTheme;
    overlay.style.setProperty("--theme-x", pointX + "px");
    overlay.style.setProperty("--theme-y", pointY + "px");
    overlay.style.setProperty("--theme-radius", radius + "px");
    overlay.classList.remove("active", "complete");
    void overlay.offsetWidth;
    overlay.classList.add("active");

    global.setTimeout(function () {
      root.classList.add("theme-swap-instant");
      TynanStorage.saveTheme(nextTheme);
      applyTheme(nextTheme);
      global.requestAnimationFrame(function () {
        global.requestAnimationFrame(function () {
          overlay.classList.add("complete");
        });
      });
    }, 460);

    global.setTimeout(function () {
      overlay.classList.remove("active", "complete");
      root.classList.remove("theme-swap-instant");
      refs.themeToggleBtn.disabled = false;
      state.themeAnimating = false;
    }, 860);
  }

  function clearCookies() {
    if (!global.confirm("这会清空人物预设、自定义事件和主题设置，是否继续？")) return;
    TynanStorage.clearAll();
    global.location.reload();
  }
  function openPresetModal() {
    refs.presetModal.classList.remove("hidden");
    refs.presetModal.setAttribute("aria-hidden", "false");
  }

  function closePresetModal() {
    refs.presetModal.classList.add("hidden");
    refs.presetModal.setAttribute("aria-hidden", "true");
  }

  function renderPresetList() {
    refs.presetList.innerHTML = "";
    if (!state.presets.length) {
      refs.presetList.appendChild(createPlaceholder("还没有保存人物预设。"));
      return;
    }
    state.presets.forEach(function (preset) {
      var item = document.createElement("li");
      item.className = "preset-item" + (state.selectedPresetName === preset.name ? " active" : "");
      item.innerHTML =
        "<div><strong>" +
        esc(preset.name) +
        '</strong><div class="preset-meta">' +
        esc(preset.title || "未填写称呼") +
        " / " +
        esc(preset.pronoun || "TA") +
        "</div></div>";
      item.addEventListener("click", function () {
        state.selectedPresetName = preset.name;
        refs.presetName.value = preset.name;
        refs.presetTitle.value = preset.title || "";
        refs.presetPronoun.value = preset.pronoun || "TA";
        renderPresetList();
      });
      refs.presetList.appendChild(item);
    });
  }

  function savePreset() {
    var name = refs.presetName.value.trim();
    if (!name) return global.alert("请先填写预设人物姓名。");
    state.presets = [
      { name: name, title: refs.presetTitle.value.trim(), pronoun: refs.presetPronoun.value || "TA" },
    ].concat(
      state.presets.filter(function (item) {
        return item.name !== name;
      })
    );
    TynanStorage.savePresets(state.presets);
    state.selectedPresetName = name;
    renderPresetList();
    renderForm();
    global.dispatchEvent(new Event("tynan-presets-updated"));
  }

  function deletePreset() {
    if (!state.selectedPresetName) return global.alert("请先选中要删除的人物预设。");
    state.presets = state.presets.filter(function (item) {
      return item.name !== state.selectedPresetName;
    });
    TynanStorage.savePresets(state.presets);
    clearPresetInputs();
    renderForm();
    global.dispatchEvent(new Event("tynan-presets-updated"));
  }

  function clearPresetInputs() {
    state.selectedPresetName = "";
    refs.presetName.value = "";
    refs.presetTitle.value = "";
    refs.presetPronoun.value = "TA";
    renderPresetList();
  }

  function ensureActiveEventExists(filtered) {
    var eventMap = TynanCatalog.getEventMap();
    if (eventMap[state.eventId]) return;
    var first = (filtered && filtered[0]) || TynanCatalog.getAllEvents()[0];
    state.eventId = first ? first.id : "";
    state.carrier = first ? first.carrier_types[0] : "";
  }

  function renderEventList() {
    var query = refs.eventSearch.value.trim().toLowerCase();
    var filtered = TynanCatalog.getAllEvents().filter(function (item) {
      return !query || item.label.toLowerCase().indexOf(query) !== -1 || item.id.toLowerCase().indexOf(query) !== -1;
    });

    refs.eventList.innerHTML = "";
    if (!filtered.length) {
      refs.eventList.appendChild(createPlaceholder("没有匹配的事件。"));
      return;
    }

    if (!filtered.some(function (item) { return item.id === state.eventId; })) {
      state.eventId = filtered[0].id;
      state.carrier = filtered[0].carrier_types[0];
    } else {
      ensureActiveEventExists(filtered);
    }

    var groups = buildGroupedEvents(filtered);
    TynanCatalog.CATEGORY_ORDER.forEach(function (category) {
      if (!groups[category] || !groups[category].length) return;
      var section = document.createElement("section");
      section.className = "event-group";
      section.innerHTML = '<h3 class="event-group-title">' + esc(category) + "</h3>";
      groups[category].forEach(function (item) {
        var button = document.createElement("button");
        button.type = "button";
        button.className = "event-item" + (item.id === state.eventId ? " active" : "");
        button.textContent = item.label;
        button.addEventListener("click", function () {
          state.eventId = item.id;
          state.carrier = item.carrier_types[0];
          renderEventList();
          renderForm();
        });
        section.appendChild(button);
      });
      refs.eventList.appendChild(section);
    });
  }

  function buildGroupedEvents(items) {
    var groups = {};
    TynanCatalog.CATEGORY_ORDER.forEach(function (category) {
      groups[category] = [];
    });
    items.forEach(function (item) {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
    });
    return groups;
  }

  function getSchema() {
    return TynanCatalog.getEventMap()[state.eventId];
  }

  function renderForm() {
    state.formRefs = {};
    state.suggestRefs = {};
    var schema = getSchema();
    if (!schema) return;

    if (schema.carrier_types.indexOf(state.carrier) === -1) {
      state.carrier = schema.carrier_types[0];
    }
    refs.carrierSelect.innerHTML = schema.carrier_types
      .map(function (item) {
        return '<option value="' + esc(item) + '">' + esc(item) + "</option>";
      })
      .join("");
    refs.carrierSelect.value = state.carrier;

    var root = document.createElement("div");
    root.appendChild(overviewCard(schema));
    root.appendChild(roleSection(schema));
    root.appendChild(objectSection(schema));
    root.appendChild(timeSection());
    root.appendChild(metaSection(schema));
    if (state.mode === "complete") root.appendChild(advancedSection());

    refs.formContainer.innerHTML = "";
    refs.formContainer.appendChild(root);
  }

  function overviewCard(schema) {
    var node = document.createElement("section");
    node.className = "overview-card";
    var modeText =
      state.mode === "simple"
        ? "简易模板：只填核心人物/对象与时间，适合手机上快速生成。"
        : "完整模板：可补充称呼、代词、品质、材料与细节开关，更适合精修。";
    node.innerHTML =
      "<h2>当前模板说明</h2>" +
      '<p class="hint">分类：' +
      esc(schema.category || "未分类") +
      " ｜ 事件：" +
      esc(schema.label) +
      "</p>" +
      '<p class="hint">适用载体：' +
      schema.carrier_types.map(esc).join(" / ") +
      "</p>" +
      "<p>" +
      esc(modeText) +
      "</p>" +
      '<div class="token-list">' +
      [
        "可手填",
        "可用建议词",
        state.mode === "simple" ? "移动端友好" : "支持精细控制",
      ]
        .map(function (item) {
          return '<span class="token">' + esc(item) + "</span>";
        })
        .join("") +
      "</div>";
    return node;
  }
  function roleSection(schema) {
    var section = createSection("角色槽位", "直接填姓名即可；完整模板下可额外填写称呼与代词。", true);
    schema.required_slots
      .filter(function (slot) {
        return slot.slot_type === "role";
      })
      .forEach(function (slot) {
        section.grid.appendChild(suggestField(slot.label, slot.key + "__name", mergedPresetNames(), "例如：风铃草"));
        if (state.mode === "complete") {
          section.grid.appendChild(
            suggestField(slot.label + "称呼/身份", slot.key + "__title", data.SLOT_SUGGESTIONS.role_title, "例如：工匠")
          );
          section.grid.appendChild(selectField(slot.label + "代词", slot.key + "__pronoun", data.SLOT_SUGGESTIONS.pronoun, "TA"));
        }
      });
    return section.node;
  }

  function objectSection(schema) {
    var section = createSection("对象槽位", "填写作品、武器、动物等对象；完整模板会额外开放可选对象。", true);
    var slots = schema.required_slots.filter(function (slot) {
      return slot.slot_type === "object";
    });
    if (state.mode === "complete") {
      slots = slots.concat(
        schema.optional_slots.filter(function (slot) {
          return slot.slot_type === "object";
        })
      );
    }
    if (!slots.length) {
      section.grid.appendChild(createHint("该事件不需要额外对象。"));
    }
    slots.forEach(function (slot) {
      section.grid.appendChild(
        suggestField(slot.label, slot.key + "__name", data.SLOT_SUGGESTIONS[slot.suggestion_type] || [], "例如：长剑")
      );
    });
    return section.node;
  }

  function timeSection() {
    var section = createSection("作品时间", "可直接选年份/象季/日期，也可用自定义时间整句覆盖。", true);
    section.grid.appendChild(selectField("年份", "time_year", data.SLOT_SUGGESTIONS.time_year, "5500"));
    section.grid.appendChild(selectField("象季", "time_quadrum", data.SLOT_SUGGESTIONS.time_quadrum, "翠象"));
    section.grid.appendChild(selectField("日期", "time_day", data.SLOT_SUGGESTIONS.time_day, "1"));
    section.grid.appendChild(
      suggestField("自定义时间（优先）", "time_custom", data.SLOT_SUGGESTIONS.date_text, "例如：5501年长象12日")
    );
    section.node.appendChild(createHint("若填写自定义时间，则优先使用；否则自动组合为“55xx年 + 四象 + 1-15日”。"));
    return section.node;
  }

  function metaSection(schema) {
    var section = createSection("基础补充", "这些字段用于提高文本辨识度；简易模板默认不强制填写。", true);
    var slots = schema.optional_slots.filter(function (slot) {
      return slot.slot_type === "meta" && slot.key !== "date_text" && state.mode === "complete";
    });
    if (!slots.length) {
      section.grid.appendChild(createHint("简易模板下只保留时间；切到完整模板可填写品质、材料、标题等。"));
    }
    slots.forEach(function (slot) {
      section.grid.appendChild(
        suggestField(slot.label, slot.key, data.SLOT_SUGGESTIONS[slot.suggestion_type] || [], "可选填写")
      );
    });
    return section.node;
  }

  function advancedSection() {
    var section = createSection("完整模板附加设置", "这些内容会影响句式池的选择与收束逻辑。", true);
    section.grid.appendChild(suggestField("场景短语", "scene_hint", data.SLOT_SUGGESTIONS.scene_hint, "例如：在微光照亮的工坊内"));
    section.grid.appendChild(suggestField("补充细节句", "detail_hint", data.SLOT_SUGGESTIONS.detail_hint, "例如：背景被刻意压缩"));
    section.grid.appendChild(suggestField("风格/寓意句", "style_hint", data.SLOT_SUGGESTIONS.style_hint, "例如：整件作品显得冷峻"));
    var row = document.createElement("div");
    row.className = "checkbox-row";
    row.appendChild(checkboxField("include_detail", "加入细节句", true));
    row.appendChild(checkboxField("include_style", "加入风格句", true));
    row.appendChild(checkboxField("include_context", "加入背景句", true));
    section.node.appendChild(row);
    return section.node;
  }

  function createSection(title, description, useGrid) {
    var node = document.createElement("section");
    node.className = "form-section";
    node.innerHTML = "<h3>" + esc(title) + "</h3>";
    if (description) node.appendChild(createHint(description));
    var grid = document.createElement("div");
    grid.className = useGrid === false ? "" : "form-grid";
    node.appendChild(grid);
    return { node: node, grid: grid };
  }

  function suggestField(label, key, suggestions, placeholder) {
    suggestions = suggestions || [];
    var wrapper = document.createElement("label");
    wrapper.className = "suggest-field";
    wrapper.appendChild(labelNode(label));

    var box = document.createElement("div");
    box.className = "suggest-box";
    var input = document.createElement("input");
    input.type = "text";
    input.className = "suggest-input";
    input.autocomplete = "off";
    input.placeholder = placeholder || "可直接输入";
    var toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "suggest-toggle";
    toggle.textContent = "▾";
    var menu = document.createElement("div");
    menu.className = "suggest-menu hidden";
    if (!suggestions.length) toggle.disabled = true;
    box.appendChild(input);
    box.appendChild(toggle);
    box.appendChild(menu);
    wrapper.appendChild(box);

    state.formRefs[key] = input;
    state.suggestRefs[key] = { menu: menu, suggestions: uniq(suggestions) };

    function showMenu() {
      if (!state.suggestRefs[key].suggestions.length) return;
      closeAllSuggestMenus(menu);
      menu.innerHTML = "";
      filterSuggestions(state.suggestRefs[key].suggestions, input.value).forEach(function (item) {
        var opt = document.createElement("button");
        opt.type = "button";
        opt.className = "suggest-option";
        opt.textContent = item;
        opt.addEventListener("mousedown", function (event) {
          event.preventDefault();
          input.value = item;
          hideSuggest(menu);
          if (key.indexOf("__name") !== -1) applyPreset(key);
        });
        menu.appendChild(opt);
      });
      if (!menu.children.length) {
        var empty = document.createElement("div");
        empty.className = "suggest-empty";
        empty.textContent = "无匹配项";
        menu.appendChild(empty);
      }
      menu.classList.remove("hidden");
    }

    input.addEventListener("focus", showMenu);
    input.addEventListener("click", showMenu);
    input.addEventListener("input", showMenu);
    input.addEventListener("blur", function () {
      global.setTimeout(function () {
        hideSuggest(menu);
      }, 120);
    });
    toggle.addEventListener("click", function (event) {
      event.preventDefault();
      if (toggle.disabled) return;
      if (menu.classList.contains("hidden")) showMenu();
      else hideSuggest(menu);
    });

    if (key.indexOf("__name") !== -1) {
      input.addEventListener("change", function () {
        applyPreset(key);
      });
      input.addEventListener("blur", function () {
        applyPreset(key);
      });
    }
    return wrapper;
  }

  function selectField(label, key, options, defaultValue) {
    var wrapper = document.createElement("label");
    wrapper.appendChild(labelNode(label));
    var select = document.createElement("select");
    select.innerHTML = (options || [])
      .map(function (item) {
        return '<option value="' + esc(item) + '">' + esc(item) + "</option>";
      })
      .join("");
    select.value = defaultValue || ((options && options[0]) || "");
    state.formRefs[key] = select;
    wrapper.appendChild(select);
    return wrapper;
  }

  function checkboxField(key, label, checked) {
    var wrapper = document.createElement("label");
    var input = document.createElement("input");
    input.type = "checkbox";
    input.checked = checked;
    state.formRefs[key] = input;
    wrapper.appendChild(input);
    wrapper.appendChild(document.createTextNode(label));
    return wrapper;
  }
  function labelNode(text) {
    var span = document.createElement("span");
    span.textContent = text;
    return span;
  }

  function uniq(items) {
    var out = [];
    (items || []).forEach(function (item) {
      if (item && out.indexOf(item) === -1) out.push(item);
    });
    return out;
  }

  function filterSuggestions(items, query) {
    var normalized = String(query || "").trim().toLowerCase();
    if (!normalized) return items;
    var prefix = items.filter(function (item) {
      return item.toLowerCase().indexOf(normalized) === 0;
    });
    var fuzzy = items.filter(function (item) {
      return item.toLowerCase().indexOf(normalized) !== -1 && prefix.indexOf(item) === -1;
    });
    return prefix.concat(fuzzy);
  }

  function closeAllSuggestMenus(exceptMenu) {
    Object.keys(state.suggestRefs).forEach(function (key) {
      if (state.suggestRefs[key].menu !== exceptMenu) hideSuggest(state.suggestRefs[key].menu);
    });
  }

  function hideSuggest(menu) {
    if (menu) menu.classList.add("hidden");
  }

  function mergedPresetNames() {
    return uniq(
      state.presets
        .map(function (item) {
          return item.name;
        })
        .concat(data.SLOT_SUGGESTIONS.person_name)
    );
  }

  function applyPreset(key) {
    var ref = state.formRefs[key];
    if (!ref) return;
    var preset = state.presets.find(function (item) {
      return item.name === ref.value.trim();
    });
    if (!preset) return;
    var base = key.replace(/__name$/, "");
    if (state.formRefs[base + "__title"]) state.formRefs[base + "__title"].value = preset.title || "";
    if (state.formRefs[base + "__pronoun"]) state.formRefs[base + "__pronoun"].value = preset.pronoun || "TA";
  }

  function buildContext() {
    var schema = getSchema();
    var roles = {};
    var objects = {};
    schema.required_slots.concat(schema.optional_slots).forEach(function (slot) {
      if (slot.slot_type === "role") {
        roles[slot.key] = {
          name: valueOf(slot.key + "__name"),
          title: valueOf(slot.key + "__title"),
          pronoun: valueOf(slot.key + "__pronoun"),
        };
      } else if (slot.slot_type === "object") {
        objects[slot.key] = valueOf(slot.key + "__name");
      }
    });
    return {
      carrier_type: refs.carrierSelect.value,
      event_id: schema.id,
      variant_count: Number(refs.variantSelect.value || 1),
      roles: roles,
      objects: objects,
      date_text: buildDateText(),
      quality: valueOf("quality"),
      title: valueOf("title"),
      material: valueOf("material"),
      style_hint: valueOf("style_hint"),
      detail_hint: valueOf("detail_hint"),
      scene_hint: valueOf("scene_hint"),
      wound_verb: valueOf("wound_verb"),
      include_detail: checkedOf("include_detail", true),
      include_style: checkedOf("include_style", true),
      include_context: checkedOf("include_context", true),
    };
  }

  function valueOf(key) {
    var ref = state.formRefs[key];
    return ref && typeof ref.value === "string" ? ref.value.trim() : "";
  }

  function checkedOf(key, fallback) {
    var ref = state.formRefs[key];
    return ref ? !!ref.checked : fallback;
  }

  function buildDateText() {
    var custom = valueOf("time_custom");
    if (custom) return custom;
    var year = valueOf("time_year");
    var quadrum = valueOf("time_quadrum");
    var day = valueOf("time_day");
    return year && quadrum && day ? year + "年" + quadrum + day + "日" : "";
  }

  function generateResults() {
    try {
      var results = TynanEngine.generate(buildContext(), {
        eventMap: TynanCatalog.getEventMap(),
        templateMap: TynanCatalog.getTemplateMap(),
        SLOT_SUGGESTIONS: data.SLOT_SUGGESTIONS,
        TEXT_TEMPLATES: data.TEXT_TEMPLATES,
      });
      state.results = results;
      renderResults(results);
    } catch (error) {
      global.alert(error.message || String(error));
    }
  }

  function renderResults(results) {
    refs.resultsContainer.innerHTML = "";
    if (!results.length) {
      refs.resultsContainer.appendChild(createPlaceholder("右侧会显示 1–5 条候选文本；可按需显示英文参考。"));
      return;
    }
    results.forEach(function (result, index) {
      var card = document.createElement("article");
      card.className = "result-card";
      var englishBlock =
        state.showEnglishReference && result.english
          ? '<label><span class="hint">English Reference</span><textarea class="english-reference" readonly></textarea></label>'
          : "";
      card.innerHTML =
        "<h3>候选 " +
        (index + 1) +
        '</h3><label><span class="hint">中文结果</span><textarea readonly></textarea></label>' +
        englishBlock +
        '<div class="button-row"><button type="button" class="ghost">复制此条</button></div>';
      card.querySelector("textarea").value = result.chinese || result.text;
      var englishTextarea = card.querySelector(".english-reference");
      if (englishTextarea) englishTextarea.value = result.english || "";
      card.querySelector("button").addEventListener("click", function () {
        var payload = result.chinese || result.text;
        if (state.showEnglishReference && result.english) payload += "\n\n[English Reference]\n" + result.english;
        copyText(payload);
      });
      refs.resultsContainer.appendChild(card);
    });
  }

  function clearForm() {
    Object.keys(state.formRefs).forEach(function (key) {
      var ref = state.formRefs[key];
      if (ref instanceof HTMLInputElement) {
        if (ref.type === "checkbox") ref.checked = true;
        else ref.value = "";
      } else if (ref instanceof HTMLTextAreaElement) {
        ref.value = "";
      } else if (ref instanceof HTMLSelectElement) {
        ref.selectedIndex = 0;
      }
    });
    if (state.formRefs.time_year) state.formRefs.time_year.value = "5500";
    if (state.formRefs.time_quadrum) state.formRefs.time_quadrum.value = "翠象";
    if (state.formRefs.time_day) state.formRefs.time_day.value = "1";
    state.results = [];
    renderResults([]);
  }

  function copyAllResults() {
    if (!state.results.length) return global.alert("请先生成文本。");
    var merged = state.results
      .map(function (item, index) {
        var payload = "[候选 " + (index + 1) + "]\n" + (item.chinese || item.text);
        if (state.showEnglishReference && item.english) payload += "\n\n[English Reference]\n" + item.english;
        return payload;
      })
      .join("\n\n");
    copyText(merged);
  }

  function createPlaceholder(text) {
    var box = document.createElement("div");
    box.className = "placeholder";
    box.textContent = text;
    return box;
  }

  function createHint(text) {
    var node = document.createElement("p");
    node.className = "hint";
    node.textContent = text;
    return node;
  }

  function showToast(message, type) {
    if (!refs.toastContainer || !message) return;
    var toast = document.createElement("div");
    toast.className = "toast" + (type ? " " + type : "");
    toast.setAttribute("role", "status");
    toast.textContent = message;
    refs.toastContainer.appendChild(toast);
    global.requestAnimationFrame(function () {
      toast.classList.add("show");
    });

    global.setTimeout(function () {
      toast.classList.remove("show");
      global.setTimeout(function () {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 260);
    }, 2200);
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        function () {
          showToast("文本已复制到剪贴板。", "success");
        },
        function () {
          fallbackCopy(text);
        }
      );
      return;
    }
    fallbackCopy(text);
  }

  function fallbackCopy(text) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "readonly");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
      showToast("文本已复制到剪贴板。", "success");
    } catch (_error) {
      showToast("复制失败，请手动复制。", "error");
    }
    document.body.removeChild(textarea);
  }

  function esc(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;");
  }

  global.TynanGeneratorPage = {
    switchView: switchView,
    createPlaceholder: createPlaceholder,
    copyText: copyText,
    buildGroupedEvents: buildGroupedEvents,
    showToast: showToast,
  };
})(window);

// ===== mechanism.js =====
;(function () {
  var refs = {
    eventList: document.querySelector("#mechanismEventList"),
    search: document.querySelector("#mechanismSearch"),
    flow: document.querySelector("#mechanismFlow"),
    flowDetail: document.querySelector("#mechanismFlowDetail"),
    details: document.querySelector("#mechanismDetails"),
  };

  var state = {
    eventId: TynanCatalog.getAllEvents()[0] ? TynanCatalog.getAllEvents()[0].id : "",
    flowIndex: 0,
  };

  var steps = [
    {
      title: "载体句根",
      summary: "先选 physical_description_root。",
      detail: "系统先按载体类型选择官方的 physical_description_root 规则。雕塑、家具、近战武器、远程武器、棺材各自使用不同的 RulePack 文本。",
    },
    {
      title: "事件 RulePack",
      summary: "再展开 TaleDef 的 image / tale_noun / circumstance_phrase / desc_sentence。",
      detail: "内置事件现在优先读取本地 ChineseSimplified 的 TaleDef 译文规则，而不是手写句子。主画面、事件名词、场景状语和细节句都从对应 grammar pool 中抽取。",
    },
    {
      title: "全局艺术规则",
      summary: "style_group 由全局艺术规则补上。",
      detail: "作品的寓意、额外画面、构图、风格形容词等，来自 ArtDescriptionUtility_Global，而不是每个事件自己维护一套风格句。",
    },
    {
      title: "背景收束句",
      summary: "context_sentence + DATE 把事件落到时间线上。",
      detail: "如果启用背景句，系统会按官方 context_sentence 规则，把 tale_noun 和日期拼成“这件描绘描述了发生在……的……”这类收束句。",
    },
    {
      title: "槽位替换",
      summary: "最后再把角色、对象、品质、标题等 token 实际填入。",
      detail: "像 {pawn_nameFull}、{pawn_possessive}、{thing_title}、{thing_quality} 这类槽位会在 grammar 展开结束后统一替换，以贴近游戏中 pawn / thing / def 规则的组织方式。",
    },
  ];

  init();

  function init() {
    refs.search.addEventListener("input", renderEventList);
    window.addEventListener("tynan-custom-events-updated", function () {
      renderEventList();
      renderDetails();
    });
    renderEventList();
    renderFlow();
    renderDetails();
  }

  function renderEventList() {
    var query = refs.search.value.trim().toLowerCase();
    refs.eventList.innerHTML = "";
    var groups = {};
    TynanCatalog.CATEGORY_ORDER.forEach(function (category) {
      groups[category] = [];
    });
    TynanCatalog.getAllEvents().forEach(function (item) {
      if (query && item.label.toLowerCase().indexOf(query) === -1 && item.id.toLowerCase().indexOf(query) === -1) return;
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
    });

    var hasSelected = false;
    TynanCatalog.CATEGORY_ORDER.forEach(function (category) {
      if (!groups[category] || !groups[category].length) return;
      var section = document.createElement("section");
      section.className = "event-group";
      section.innerHTML = '<h3 class="event-group-title">' + esc(category) + "</h3>";
      groups[category].forEach(function (item) {
        var button = document.createElement("button");
        button.type = "button";
        button.className = "event-item" + (item.id === state.eventId ? " active" : "");
        button.textContent = item.label;
        if (item.id === state.eventId) hasSelected = true;
        button.addEventListener("click", function () {
          state.eventId = item.id;
          renderEventList();
          renderDetails();
        });
        section.appendChild(button);
      });
      refs.eventList.appendChild(section);
    });

    if (!hasSelected) {
      var first = TynanCatalog.getAllEvents()[0];
      if (first) {
        state.eventId = first.id;
        renderEventList();
      }
    }
  }

  function renderFlow() {
    refs.flow.innerHTML = "";
    steps.forEach(function (step, index) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "flow-step" + (index === state.flowIndex ? " active" : "");
      button.innerHTML = "<strong>" + (index + 1) + "</strong><span>" + esc(step.title) + "</span>";
      button.addEventListener("click", function () {
        state.flowIndex = index;
        renderFlow();
        renderFlowDetail();
      });
      refs.flow.appendChild(button);
    });
    renderFlowDetail();
  }

  function renderFlowDetail() {
    var step = steps[state.flowIndex];
    refs.flowDetail.innerHTML =
      "<h3>" + esc(step.title) + "</h3>" +
      "<p><strong>表层理解：</strong>" + esc(step.summary) + "</p>" +
      "<p><strong>深入解释：</strong>" + esc(step.detail) + "</p>";
  }

  function renderDetails() {
    var schema = TynanCatalog.getEventMap()[state.eventId];
    if (!schema) {
      refs.details.innerHTML = "";
      return;
    }
    var template = TynanCatalog.getTemplateMap()[schema.id];
    refs.details.innerHTML = "";
    refs.details.appendChild(overview(schema));
    refs.details.appendChild(slotExplorer(schema));
    refs.details.appendChild(templateExplorer(template));
  }

  function overview(schema) {
    var box = document.createElement("section");
    box.className = "mechanism-event-box";
    box.innerHTML =
      "<h2>" + esc(schema.label) + "</h2>" +
      "<p class=\"hint\">分类：" + esc(schema.category || "未分类") + " ｜ 载体：" + schema.carrier_types.map(esc).join(" / ") + "</p>" +
      "<div class=\"token-list\">" +
      ["physical_description_root", "image", "desc_sentence", "style_group", "context_sentence"]
        .map(function (item) {
          return '<span class="token">' + esc(item) + "</span>";
        })
        .join("") +
      "</div>";
    return box;
  }

  function slotExplorer(schema) {
    var box = document.createElement("section");
    box.className = "mechanism-event-box";
    box.innerHTML = "<h2>槽位与输入</h2>";
    var required = document.createElement("details");
    required.open = true;
    required.innerHTML = "<summary>必填槽位</summary>" + listSlots(schema.required_slots, "该事件没有必填槽位。");
    var optional = document.createElement("details");
    optional.innerHTML = "<summary>可选槽位</summary>" + listSlots(schema.optional_slots, "该事件没有可选槽位。");
    var notes = document.createElement("details");
    notes.innerHTML =
      "<summary>深入说明</summary><ul>" +
      "<li><code>{pawn_nameFull}</code> / <code>{victim_nameDef}</code> 这类写法对应 TaleDef 中的 pawn token。</li>" +
      "<li><code>{pawn_possessive}</code> / <code>{pawn_pronoun}</code> 会按你填写的代词自动展开成“他的 / 她的 / TA的”等形式。</li>" +
      "<li><code>{thing_title}</code> / <code>{thing_quality}</code> 只在相关事件使用，来源对应游戏里的 thing / title / quality 规则。</li>" +
      "</ul>";
    box.appendChild(required);
    box.appendChild(optional);
    box.appendChild(notes);
    return box;
  }

  function listSlots(slots, fallback) {
    if (!slots || !slots.length) return '<p class="hint">' + esc(fallback) + "</p>";
    return "<ul>" + slots.map(function (slot) {
      return "<li><strong>" + esc(slot.label) + "</strong> ｜ key: <code>" + esc(slot.key) + "</code> ｜ 类型: <code>" + esc(slot.slot_type) + "</code> ｜ 建议池: <code>" + esc(slot.suggestion_type || "无") + "</code></li>";
    }).join("") + "</ul>";
  }

  function templateExplorer(template) {
    var box = document.createElement("section");
    box.className = "mechanism-event-box";
    box.innerHTML = "<h2>可能出现的句式</h2>";
    [
      ["tale_noun 事件名词", template.event_nouns, true],
      ["image 主画面", template.main_images, true],
      ["desc_sentence 细节句", template.detail_sentences, false],
      ["style_group / style_clause", template.style_sentences, false],
      ["circumstance_phrase 场景状语", template.scene_phrases, false],
    ].forEach(function (section) {
      box.appendChild(templateList(section[0], section[1], section[2]));
    });
    return box;
  }

  function templateList(title, items, open) {
    var details = document.createElement("details");
    details.open = !!open;
    details.innerHTML = "<summary>" + esc(title) + "</summary><ol>" + items.map(function (item) {
      return "<li><code>" + esc(item) + "</code></li>";
    }).join("") + "</ol>";
    return details;
  }

  function esc(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;");
  }
})();

// ===== custom-event.js =====
;(function (global) {
  var data = global.TynanArtData;
  var SLOT_SUGGESTIONS = data.SLOT_SUGGESTIONS;

  var refs = {
    list: document.querySelector("#customEventList"),
    search: document.querySelector("#customEventSearch"),
    newBtn: document.querySelector("#newCustomEventBtn"),
    cloneBtn: document.querySelector("#cloneBaseEventBtn"),
    saveBtn: document.querySelector("#saveCustomEventBtn"),
    deleteBtn: document.querySelector("#deleteCustomEventBtn"),
    resetBtn: document.querySelector("#resetCustomEventBtn"),
    previewCarrierSelect: document.querySelector("#previewCarrierSelect"),
    previewStatus: document.querySelector("#customPreviewStatus"),
    previewOutput: document.querySelector("#customPreviewOutput"),
    previewTokens: document.querySelector("#customPreviewTokens"),
    label: document.querySelector("#customLabel"),
    id: document.querySelector("#customId"),
    carrierBox: document.querySelector("#carrierCheckboxes"),
    metaBox: document.querySelector("#metaFieldCheckboxes"),
    requiredRoleEditor: document.querySelector("#requiredRoleEditor"),
    requiredObjectEditor: document.querySelector("#requiredObjectEditor"),
    optionalRoleEditor: document.querySelector("#optionalRoleEditor"),
    optionalObjectEditor: document.querySelector("#optionalObjectEditor"),
    eventNounsEditor: document.querySelector("#eventNounsEditor"),
    mainImagesEditor: document.querySelector("#mainImagesEditor"),
    detailsEditor: document.querySelector("#detailsEditor"),
    stylesEditor: document.querySelector("#stylesEditor"),
    scenesEditor: document.querySelector("#scenesEditor"),
    addRequiredRoleBtn: document.querySelector("#addRequiredRoleBtn"),
    addRequiredObjectBtn: document.querySelector("#addRequiredObjectBtn"),
    addOptionalRoleBtn: document.querySelector("#addOptionalRoleBtn"),
    addOptionalObjectBtn: document.querySelector("#addOptionalObjectBtn"),
    addEventNounBtn: document.querySelector("#addEventNounBtn"),
    addMainImageBtn: document.querySelector("#addMainImageBtn"),
    addDetailBtn: document.querySelector("#addDetailBtn"),
    addStyleBtn: document.querySelector("#addStyleBtn"),
    addSceneBtn: document.querySelector("#addSceneBtn"),
    cloneModal: document.querySelector("#cloneModal"),
    closeCloneBtn: document.querySelector("#closeCloneBtn"),
    cloneSearch: document.querySelector("#cloneSearch"),
    cloneEventList: document.querySelector("#cloneEventList"),
  };

  var metaFields = [
    { key: "date_text", label: "日期", suggestion_type: "date_text", checked: true },
    { key: "quality", label: "品质", suggestion_type: "quality", checked: false },
    { key: "title", label: "标题", suggestion_type: "art_title", checked: false },
    { key: "material", label: "材料", suggestion_type: "material", checked: false },
    { key: "wound_verb", label: "伤害动词", suggestion_type: "wound_verb", checked: false },
  ];

  var slotEditorConfigs = {
    requiredRole: {
      container: refs.requiredRoleEditor,
      slotType: "role",
      emptyText: "暂无必填角色。至少建议保留 1 个，比如“创作者”或“主角”。",
      labelPlaceholder: "例如：创作者",
    },
    requiredObject: {
      container: refs.requiredObjectEditor,
      slotType: "object",
      emptyText: "暂无必填对象。若事件围绕某件物品展开，建议添加 1 个对象。",
      labelPlaceholder: "例如：作品",
    },
    optionalRole: {
      container: refs.optionalRoleEditor,
      slotType: "role",
      emptyText: "暂无可选角色。若不需要旁观者、受害者等配角，可以留空。",
      labelPlaceholder: "例如：旁观者",
    },
    optionalObject: {
      container: refs.optionalObjectEditor,
      slotType: "object",
      emptyText: "暂无可选对象。若不需要背景物件或附属道具，可以留空。",
      labelPlaceholder: "例如：背景动物",
    },
  };

  var templateConfigs = {
    event_nouns: {
      container: refs.eventNounsEditor,
      emptyText: "暂无背景叙述。你可以先写 1 条，描述“这件作品讲述了什么”。",
      placeholder: "例如：{pawn_display}完成了一次归来",
      rows: 2,
    },
    main_images: {
      container: refs.mainImagesEditor,
      emptyText: "暂无主画面句。建议至少写 1 条主画面，预览会更稳定。",
      placeholder: "例如：{pawn_display}正高举{thing_name}{scene_fragment}",
      rows: 3,
    },
    detail_sentences: {
      container: refs.detailsEditor,
      emptyText: "暂无细节句。可以留空，系统会使用默认句式。",
      placeholder: "例如：背景中的线条被压缩成尖锐的几何块面。",
      rows: 2,
    },
    style_sentences: {
      container: refs.stylesEditor,
      emptyText: "暂无风格句。可以留空，系统会使用默认句式。",
      placeholder: "例如：整件作品显得克制而庄严。",
      rows: 2,
    },
    scene_phrases: {
      container: refs.scenesEditor,
      emptyText: "暂无场景短语。你可以补充“在……之中”这类片段。",
      placeholder: "例如：在被风沙包围的停机坪上",
      rows: 2,
    },
  };

  var objectSuggestionTypes = collectObjectSuggestionTypes();
  var state = {
    selectedId: "",
    items: [],
    idTouched: false,
  };

  init();

  function init() {
    state.items = TynanCatalog.getCustomEvents();
    state.selectedId = state.items[0] ? state.items[0].id : "";
    renderCarrierCheckboxes();
    renderMetaCheckboxes();
    bind();
    renderCustomList();
    renderCloneList();
    if (state.selectedId) loadEditor(findItem(state.selectedId));
    else resetEditor();
    renderPreview();
  }

  function bind() {
    refs.search.addEventListener("input", renderCustomList);
    refs.cloneSearch.addEventListener("input", renderCloneList);

    refs.newBtn.addEventListener("click", function () {
      state.selectedId = "";
      resetEditor();
      renderCustomList();
      renderPreview();
    });
    refs.cloneBtn.addEventListener("click", openCloneModal);
    refs.closeCloneBtn.addEventListener("click", closeCloneModal);
    refs.cloneModal.addEventListener("click", function (event) {
      if (event.target === refs.cloneModal) closeCloneModal();
    });

    refs.saveBtn.addEventListener("click", saveEvent);
    refs.deleteBtn.addEventListener("click", deleteEvent);
    refs.resetBtn.addEventListener("click", function () {
      if (state.selectedId) loadEditor(findItem(state.selectedId));
      else resetEditor();
      renderPreview();
    });
    refs.previewCarrierSelect.addEventListener("change", renderPreview);

    refs.label.addEventListener("input", function () {
      if (!state.idTouched) refs.id.value = autoEventId(refs.label.value);
      renderPreview();
    });
    refs.id.addEventListener("input", function () {
      state.idTouched = !!refs.id.value.trim();
      renderPreview();
    });

    refs.addRequiredRoleBtn.addEventListener("click", function () {
      addSlotRow(slotEditorConfigs.requiredRole.container, slotEditorConfigs.requiredRole.slotType, {}, slotEditorConfigs.requiredRole.labelPlaceholder);
      renderPreview();
    });
    refs.addRequiredObjectBtn.addEventListener("click", function () {
      addSlotRow(slotEditorConfigs.requiredObject.container, slotEditorConfigs.requiredObject.slotType, {}, slotEditorConfigs.requiredObject.labelPlaceholder);
      renderPreview();
    });
    refs.addOptionalRoleBtn.addEventListener("click", function () {
      addSlotRow(slotEditorConfigs.optionalRole.container, slotEditorConfigs.optionalRole.slotType, {}, slotEditorConfigs.optionalRole.labelPlaceholder);
      renderPreview();
    });
    refs.addOptionalObjectBtn.addEventListener("click", function () {
      addSlotRow(slotEditorConfigs.optionalObject.container, slotEditorConfigs.optionalObject.slotType, {}, slotEditorConfigs.optionalObject.labelPlaceholder);
      renderPreview();
    });

    refs.addEventNounBtn.addEventListener("click", function () {
      addTemplateRow(templateConfigs.event_nouns.container, "event_nouns", "");
      renderPreview();
    });
    refs.addMainImageBtn.addEventListener("click", function () {
      addTemplateRow(templateConfigs.main_images.container, "main_images", "");
      renderPreview();
    });
    refs.addDetailBtn.addEventListener("click", function () {
      addTemplateRow(templateConfigs.detail_sentences.container, "detail_sentences", "");
      renderPreview();
    });
    refs.addStyleBtn.addEventListener("click", function () {
      addTemplateRow(templateConfigs.style_sentences.container, "style_sentences", "");
      renderPreview();
    });
    refs.addSceneBtn.addEventListener("click", function () {
      addTemplateRow(templateConfigs.scene_phrases.container, "scene_phrases", "");
      renderPreview();
    });

    [
      refs.requiredRoleEditor,
      refs.requiredObjectEditor,
      refs.optionalRoleEditor,
      refs.optionalObjectEditor,
      refs.eventNounsEditor,
      refs.mainImagesEditor,
      refs.detailsEditor,
      refs.stylesEditor,
      refs.scenesEditor,
    ].forEach(function (container) {
      container.addEventListener("click", handleEditorClick);
      container.addEventListener("input", handleEditorInput);
      container.addEventListener("change", renderPreview);
    });

    document.addEventListener("change", function (event) {
      if (event.target.closest("#carrierCheckboxes")) {
        ensureAtLeastOneCarrier(event.target);
        renderPreview();
      }
      if (event.target.closest("#metaFieldCheckboxes")) renderPreview();
    });

    global.addEventListener("tynan-custom-events-updated", function () {
      state.items = TynanCatalog.getCustomEvents();
      renderCustomList();
      renderCloneList();
    });
  }
  function collectAllCarriers() {
    var all = [];
    data.EVENT_SCHEMAS.forEach(function (item) {
      (item.carrier_types || []).forEach(function (carrier) {
        if (all.indexOf(carrier) === -1) all.push(carrier);
      });
    });
    return all;
  }

  function collectObjectSuggestionTypes() {
    var keys = [];
    data.EVENT_SCHEMAS.forEach(function (item) {
      item.required_slots.concat(item.optional_slots).forEach(function (slot) {
        if (slot.slot_type === "object" && slot.suggestion_type && keys.indexOf(slot.suggestion_type) === -1) {
          keys.push(slot.suggestion_type);
        }
      });
    });
    Object.keys(SLOT_SUGGESTIONS).forEach(function (key) {
      if (
        ["person_name", "role_title", "pronoun", "date_text", "quality", "art_title", "scene_hint", "detail_hint", "style_hint", "wound_verb", "time_year", "time_quadrum", "time_day"].indexOf(key) === -1 &&
        keys.indexOf(key) === -1
      ) {
        keys.push(key);
      }
    });
    return keys.sort();
  }

  function renderCarrierCheckboxes() {
    refs.carrierBox.innerHTML = "";
    collectAllCarriers().forEach(function (carrier) {
      refs.carrierBox.appendChild(check("carrier_" + carrier, carrier, true));
    });
  }

  function renderMetaCheckboxes() {
    refs.metaBox.innerHTML = "";
    metaFields.forEach(function (field) {
      refs.metaBox.appendChild(check("meta_" + field.key, field.label, field.checked));
    });
  }

  function check(id, label, checked) {
    var node = document.createElement("label");
    var input = document.createElement("input");
    input.type = "checkbox";
    input.id = id;
    input.checked = checked;
    node.appendChild(input);
    node.appendChild(document.createTextNode(label));
    return node;
  }

  function renderCustomList() {
    var query = refs.search.value.trim().toLowerCase();
    refs.list.innerHTML = "";
    var filtered = state.items.filter(function (item) {
      return !query || item.label.toLowerCase().indexOf(query) !== -1 || item.id.toLowerCase().indexOf(query) !== -1;
    });
    if (!filtered.length) {
      refs.list.appendChild(placeholder("还没有保存自定义事件。"));
      return;
    }
    if (!filtered.some(function (item) { return item.id === state.selectedId; })) {
      state.selectedId = filtered[0].id;
    }
    var section = document.createElement("section");
    section.className = "event-group";
    section.innerHTML = '<h3 class="event-group-title">自定义类</h3>';
    filtered.forEach(function (item) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "event-item" + (item.id === state.selectedId ? " active" : "");
      button.textContent = item.label;
      button.addEventListener("click", function () {
        state.selectedId = item.id;
        loadEditor(item);
        renderCustomList();
        renderPreview();
      });
      section.appendChild(button);
    });
    refs.list.appendChild(section);
  }

  function renderCloneList() {
    var query = refs.cloneSearch.value.trim().toLowerCase();
    refs.cloneEventList.innerHTML = "";
    var grouped = {};
    TynanCatalog.CATEGORY_ORDER.forEach(function (category) {
      if (category !== "自定义类") grouped[category] = [];
    });
    data.EVENT_SCHEMAS.forEach(function (item) {
      if (query && item.label.toLowerCase().indexOf(query) === -1 && item.id.toLowerCase().indexOf(query) === -1) return;
      if (!grouped[item.category]) grouped[item.category] = [];
      grouped[item.category].push(item);
    });
    TynanCatalog.CATEGORY_ORDER.forEach(function (category) {
      if (category === "自定义类" || !grouped[category] || !grouped[category].length) return;
      var section = document.createElement("section");
      section.className = "event-group";
      section.innerHTML = '<h3 class="event-group-title">' + esc(category) + "</h3>";
      grouped[category].forEach(function (item) {
        var button = document.createElement("button");
        button.type = "button";
        button.className = "event-item";
        button.textContent = item.label;
        button.addEventListener("click", function () {
          state.selectedId = "";
          loadEditor(TynanCatalog.cloneFromBaseEvent(item.id));
          closeCloneModal();
          renderCustomList();
          renderPreview();
        });
        section.appendChild(button);
      });
      refs.cloneEventList.appendChild(section);
    });
  }

  function openCloneModal() {
    refs.cloneModal.classList.remove("hidden");
    refs.cloneModal.setAttribute("aria-hidden", "false");
    refs.cloneSearch.value = "";
    renderCloneList();
  }

  function closeCloneModal() {
    refs.cloneModal.classList.add("hidden");
    refs.cloneModal.setAttribute("aria-hidden", "true");
  }

  function resetEditor() {
    loadEditor(TynanCatalog.createBlankCustomEvent());
    refs.id.value = autoEventId(refs.label.value);
    state.idTouched = false;
  }

  function loadEditor(item) {
    item = item || TynanCatalog.createBlankCustomEvent();
    refs.label.value = item.label || "";
    refs.id.value = item.id || autoEventId(item.label || "");
    state.idTouched = !!item.id && !!state.selectedId;
    setChecks("carrier_", item.carrier_types || collectAllCarriers());
    setChecks(
      "meta_",
      (item.optional_slots || [])
        .filter(function (slot) {
          return slot.slot_type === "meta";
        })
        .map(function (slot) {
          return slot.key;
        })
    );

    setSlotRows(refs.requiredRoleEditor, filterSlots(item.required_slots, "role"), slotEditorConfigs.requiredRole);
    setSlotRows(refs.requiredObjectEditor, filterSlots(item.required_slots, "object"), slotEditorConfigs.requiredObject);
    setSlotRows(refs.optionalRoleEditor, filterSlots(item.optional_slots, "role"), slotEditorConfigs.optionalRole);
    setSlotRows(refs.optionalObjectEditor, filterSlots(item.optional_slots, "object"), slotEditorConfigs.optionalObject);

    setTemplateRows(refs.eventNounsEditor, "event_nouns", (item.templates && item.templates.event_nouns) || []);
    setTemplateRows(refs.mainImagesEditor, "main_images", (item.templates && item.templates.main_images) || []);
    setTemplateRows(refs.detailsEditor, "detail_sentences", (item.templates && item.templates.detail_sentences) || []);
    setTemplateRows(refs.stylesEditor, "style_sentences", (item.templates && item.templates.style_sentences) || []);
    setTemplateRows(refs.scenesEditor, "scene_phrases", (item.templates && item.templates.scene_phrases) || []);

    updatePreviewCarrierOptions(item.carrier_types || collectAllCarriers());
    renderPreview();
  }

  function filterSlots(slots, type) {
    return (slots || []).filter(function (slot) {
      return slot.slot_type === type;
    });
  }

  function autoEventId(label) {
    var slug = TynanCatalog.slugify(label || "");
    return slug ? "custom_" + slug : "";
  }

  function setSlotRows(container, items, config) {
    container.innerHTML = "";
    if (!items || !items.length) {
      syncEmptyState(container, config.emptyText);
      return;
    }
    items.forEach(function (item) {
      addSlotRow(container, config.slotType, item, config.labelPlaceholder, true);
    });
    updateRowNumbers(container);
  }

  function addSlotRow(container, slotType, value, labelPlaceholder, silent) {
    clearEmptyState(container);
    var row = document.createElement("article");
    row.className = "editor-row";
    row.dataset.slotType = slotType;
    row.innerHTML =
      '<div class="editor-row-top"><span class="row-index"></span><button type="button" class="ghost mini-button remove-row-btn">删除</button></div>' +
      '<div class="editor-row-grid' +
      (slotType === "object" ? ' object-grid' : '') +
      '"></div>' +
      '<p class="hint token-hint"></p>';

    var grid = row.querySelector(".editor-row-grid");
    var labelField = buildTextInputField("界面名称", "label", labelPlaceholder || "例如：角色", value && value.label);
    var keyField = buildTextInputField("变量名（高级，可留空）", "key", slotType === "role" ? "例如：maker" : "例如：thing", value && value.key);
    grid.appendChild(labelField);
    grid.appendChild(keyField);

    if (slotType === "object") {
      grid.appendChild(buildSelectField("建议词池", "suggestion_type", objectSuggestionTypes, (value && value.suggestion_type) || "object_name"));
    }

    var keyInput = row.querySelector('[data-field="key"]');
    keyInput.dataset.auto = value && value.key ? (value.key === suggestSlotKey(slotType, value.label || value.key, getRowCount(container) + 1) ? "true" : "false") : "true";
    container.appendChild(row);
    syncSlotRow(row);
    updateRowNumbers(container);
    if (!silent) focusField(row, "label");
  }

  function buildTextInputField(label, field, placeholder, value) {
    var wrapper = document.createElement("label");
    wrapper.innerHTML = '<span>' + esc(label) + '</span><input type="text" data-field="' + esc(field) + '" placeholder="' + esc(placeholder || "") + '" />';
    wrapper.querySelector("input").value = value || "";
    return wrapper;
  }

  function buildSelectField(label, field, options, value) {
    var wrapper = document.createElement("label");
    var select = document.createElement("select");
    select.setAttribute("data-field", field);
    select.innerHTML = (options || [])
      .map(function (item) {
        return '<option value="' + esc(item) + '">' + esc(item) + "</option>";
      })
      .join("");
    select.value = value || ((options && options[0]) || "");
    wrapper.appendChild(createTextSpan(label));
    wrapper.appendChild(select);
    return wrapper;
  }

  function createTextSpan(text) {
    var span = document.createElement("span");
    span.textContent = text;
    return span;
  }
  function setTemplateRows(container, templateKey, items) {
    container.innerHTML = "";
    if (!items || !items.length) {
      syncEmptyState(container, templateConfigs[templateKey].emptyText);
      return;
    }
    items.forEach(function (item) {
      addTemplateRow(container, templateKey, item, true);
    });
    updateRowNumbers(container);
  }

  function addTemplateRow(container, templateKey, value, silent) {
    clearEmptyState(container);
    var config = templateConfigs[templateKey];
    var row = document.createElement("article");
    row.className = "editor-row";
    row.dataset.templateKey = templateKey;
    row.innerHTML =
      '<div class="editor-row-top"><span class="row-index"></span><button type="button" class="ghost mini-button remove-row-btn">删除</button></div>' +
      '<label><span>句式内容</span><textarea data-field="content" rows="' +
      esc(String(config.rows || 2)) +
      '" placeholder="' +
      esc(config.placeholder || "") +
      '"></textarea></label>';
    row.querySelector("textarea").value = value || "";
    container.appendChild(row);
    updateRowNumbers(container);
    if (!silent) focusField(row, "content");
  }

  function syncEmptyState(container, text) {
    if (getEditorRows(container).length) return;
    var empty = document.createElement("div");
    empty.className = "empty-editor";
    empty.textContent = text;
    container.appendChild(empty);
  }

  function clearEmptyState(container) {
    var empty = container.querySelector(".empty-editor");
    if (empty) empty.remove();
  }

  function updateRowNumbers(container) {
    getEditorRows(container).forEach(function (row, index) {
      var label = row.dataset.slotType ? (row.dataset.slotType === "role" ? "槽位" : "对象") : "句式";
      var node = row.querySelector(".row-index");
      if (node) node.textContent = label + " " + (index + 1);
      if (row.dataset.slotType) syncSlotRow(row);
    });
    if (!getEditorRows(container).length) {
      if (container === refs.requiredRoleEditor) syncEmptyState(container, slotEditorConfigs.requiredRole.emptyText);
      if (container === refs.requiredObjectEditor) syncEmptyState(container, slotEditorConfigs.requiredObject.emptyText);
      if (container === refs.optionalRoleEditor) syncEmptyState(container, slotEditorConfigs.optionalRole.emptyText);
      if (container === refs.optionalObjectEditor) syncEmptyState(container, slotEditorConfigs.optionalObject.emptyText);
      if (container === refs.eventNounsEditor) syncEmptyState(container, templateConfigs.event_nouns.emptyText);
      if (container === refs.mainImagesEditor) syncEmptyState(container, templateConfigs.main_images.emptyText);
      if (container === refs.detailsEditor) syncEmptyState(container, templateConfigs.detail_sentences.emptyText);
      if (container === refs.stylesEditor) syncEmptyState(container, templateConfigs.style_sentences.emptyText);
      if (container === refs.scenesEditor) syncEmptyState(container, templateConfigs.scene_phrases.emptyText);
    }
  }

  function getEditorRows(container) {
    return Array.prototype.slice.call(container.querySelectorAll(".editor-row"));
  }

  function getRowCount(container) {
    return getEditorRows(container).length;
  }

  function focusField(row, field) {
    var target = row.querySelector('[data-field="' + field + '"]');
    if (target) target.focus();
  }

  function handleEditorClick(event) {
    var removeBtn = event.target.closest(".remove-row-btn");
    if (!removeBtn) return;
    var row = removeBtn.closest(".editor-row");
    var container = row.parentElement;
    row.remove();
    updateRowNumbers(container);
    renderPreview();
  }

  function handleEditorInput(event) {
    var row = event.target.closest(".editor-row");
    if (!row) return;
    if (row.dataset.slotType) {
      var keyInput = row.querySelector('[data-field="key"]');
      if (event.target.getAttribute("data-field") === "key") {
        keyInput.dataset.auto = keyInput.value.trim() ? "false" : "true";
      }
      syncSlotRow(row);
    }
    renderPreview();
  }

  function syncSlotRow(row) {
    var slotType = row.dataset.slotType;
    var labelInput = row.querySelector('[data-field="label"]');
    var keyInput = row.querySelector('[data-field="key"]');
    var container = row.parentElement;
    var index = getEditorRows(container).indexOf(row) + 1;
    if (!keyInput.value.trim() || keyInput.dataset.auto === "true") {
      keyInput.value = suggestSlotKey(slotType, labelInput.value, index);
      keyInput.dataset.auto = "true";
    }
    var key = sanitizeKey(keyInput.value, slotType, index);
    keyInput.value = key;
    var tokenHint = row.querySelector(".token-hint");
    tokenHint.innerHTML =
      slotType === "role"
        ? '可用变量：<code>{' + esc(key) + '_display}</code> / <code>{' + esc(key) + '_name}</code> / <code>{' + esc(key) + '_pronoun}</code>'
        : '可用变量：<code>{' + esc(key) + '_name}</code>';
  }

  function sanitizeKey(raw, slotType, index) {
    var key = String(raw || "").trim();
    if (!key) key = suggestSlotKey(slotType, "", index);
    key = key.replace(/^custom_/, "");
    if (/^\d/.test(key)) key = (slotType === "role" ? "role_" : "object_") + key;
    return key;
  }

  function suggestSlotKey(slotType, label, index) {
    var slug = TynanCatalog.slugify(label || "").replace(/^custom_/, "");
    if (!slug) slug = (slotType === "role" ? "role" : "object") + (index || 1);
    if (/^\d/.test(slug)) slug = (slotType === "role" ? "role_" : "object_") + slug;
    return slug;
  }

  function ensureAtLeastOneCarrier(changedNode) {
    if (collectChecked("carrier_").length) return;
    if (changedNode) changedNode.checked = true;
  }

  function setChecks(prefix, values) {
    Array.prototype.forEach.call(document.querySelectorAll('input[id^="' + prefix + '"]'), function (node) {
      node.checked = values.indexOf(node.id.slice(prefix.length)) !== -1;
    });
  }

  function collectChecked(prefix) {
    var result = [];
    Array.prototype.forEach.call(document.querySelectorAll('input[id^="' + prefix + '"]'), function (node) {
      if (node.checked) result.push(node.id.slice(prefix.length));
    });
    return result;
  }

  function collectSlotRows(container, slotType) {
    return getEditorRows(container)
      .map(function (row, index) {
        var label = valueOfRow(row, "label");
        var key = sanitizeKey(valueOfRow(row, "key"), slotType, index + 1);
        var suggestionType = slotType === "role" ? "person_name" : valueOfRow(row, "suggestion_type") || "object_name";
        if (!label && !key) return null;
        return {
          key: key,
          label: label || key,
          slot_type: slotType,
          suggestion_type: suggestionType,
        };
      })
      .filter(Boolean);
  }

  function collectTemplateRows(container) {
    return getEditorRows(container)
      .map(function (row) {
        return valueOfRow(row, "content");
      })
      .filter(Boolean);
  }

  function valueOfRow(row, field) {
    var node = row.querySelector('[data-field="' + field + '"]');
    return node && typeof node.value === "string" ? node.value.trim() : "";
  }

  function collectMetaSlots() {
    return metaFields
      .filter(function (field) {
        var node = document.querySelector("#meta_" + field.key);
        return node && node.checked;
      })
      .map(function (field) {
        return { key: field.key, label: field.label, slot_type: "meta", suggestion_type: field.suggestion_type };
      });
  }

  function collectDraft() {
    return {
      id: refs.id.value.trim(),
      label: refs.label.value.trim(),
      category: "自定义类",
      carrier_types: collectChecked("carrier_"),
      required_slots: collectSlotRows(refs.requiredRoleEditor, "role").concat(collectSlotRows(refs.requiredObjectEditor, "object")),
      optional_slots: collectSlotRows(refs.optionalRoleEditor, "role")
        .concat(collectSlotRows(refs.optionalObjectEditor, "object"))
        .concat(collectMetaSlots()),
      templates: {
        event_nouns: collectTemplateRows(refs.eventNounsEditor),
        main_images: collectTemplateRows(refs.mainImagesEditor),
        detail_sentences: collectTemplateRows(refs.detailsEditor),
        style_sentences: collectTemplateRows(refs.stylesEditor),
        scene_phrases: collectTemplateRows(refs.scenesEditor),
      },
    };
  }

  function updatePreviewCarrierOptions(carriers) {
    var current = refs.previewCarrierSelect.value;
    refs.previewCarrierSelect.innerHTML = (carriers || [])
      .map(function (carrier) {
        return '<option value="' + esc(carrier) + '">' + esc(carrier) + "</option>";
      })
      .join("");
    refs.previewCarrierSelect.value = (carriers || []).indexOf(current) !== -1 ? current : ((carriers || [])[0] || "");
  }
  function saveEvent() {
    var raw = collectDraft();
    if (!raw.label) return global.alert("请先填写事件标题。");
    if (!raw.required_slots.length) return global.alert("请至少定义一个必填角色或必填对象。");
    try {
      var normalized = TynanCatalog.normalizeCustomEvent(raw);
      state.items = [normalized].concat(
        state.items.filter(function (item) {
          return item.id !== normalized.id;
        })
      );
      TynanCatalog.saveCustomEvents(state.items);
      state.items = TynanCatalog.getCustomEvents();
      state.selectedId = normalized.id;
      state.idTouched = true;
      renderCustomList();
      loadEditor(normalized);
      renderPreview();
      global.dispatchEvent(new Event("tynan-custom-events-updated"));
      if (global.TynanGeneratorPage && global.TynanGeneratorPage.showToast) {
        global.TynanGeneratorPage.showToast("自定义事件已保存。", "success");
      }
    } catch (error) {
      global.alert(error.message || String(error));
    }
  }

  function deleteEvent() {
    if (!state.selectedId) return global.alert("当前没有选中已保存的自定义事件。");
    if (!global.confirm("确定删除当前自定义事件吗？此操作无法撤销。")) return;
    state.items = state.items.filter(function (item) {
      return item.id !== state.selectedId;
    });
    TynanCatalog.saveCustomEvents(state.items);
    state.items = TynanCatalog.getCustomEvents();
    state.selectedId = state.items[0] ? state.items[0].id : "";
    renderCustomList();
    if (state.selectedId) loadEditor(findItem(state.selectedId));
    else resetEditor();
    renderPreview();
    global.dispatchEvent(new Event("tynan-custom-events-updated"));
    if (global.TynanGeneratorPage && global.TynanGeneratorPage.showToast) {
      global.TynanGeneratorPage.showToast("自定义事件已删除。", "success");
    }
  }

  function findItem(id) {
    for (var i = 0; i < state.items.length; i += 1) {
      if (state.items[i].id === id) return state.items[i];
    }
    return null;
  }

  function renderPreview() {
    var draft = collectDraft();
    updateTokenList(draft);
    try {
      var eventDraft = TynanCatalog.normalizeCustomEvent(draft);
      updatePreviewCarrierOptions(eventDraft.carrier_types);
      var carrier = refs.previewCarrierSelect.value || eventDraft.carrier_types[0];
      refs.previewCarrierSelect.value = carrier;
      var preview = TynanEngine.generate(buildPreviewContext(eventDraft, carrier), {
        eventMap: objectWithSchema(eventDraft),
        templateMap: objectWithTemplate(eventDraft),
        SLOT_SUGGESTIONS: SLOT_SUGGESTIONS,
        TEXT_TEMPLATES: data.TEXT_TEMPLATES,
      })[0];
      refs.previewStatus.textContent = "预览生成成功";
      refs.previewOutput.value = preview.text;
    } catch (error) {
      refs.previewStatus.textContent = "预览无法生成：" + (error.message || String(error));
      refs.previewOutput.value = "";
    }
  }

  function buildPreviewContext(schema, carrier) {
    var roles = {};
    var objects = {};
    var roleIndex = 0;
    var objectIndex = 0;
    schema.required_slots.concat(schema.optional_slots).forEach(function (slot) {
      if (slot.slot_type === "role") {
        roles[slot.key] = {
          name: SLOT_SUGGESTIONS.person_name[roleIndex % SLOT_SUGGESTIONS.person_name.length],
          title: slot.label || "角色",
          pronoun: "TA",
        };
        roleIndex += 1;
      } else if (slot.slot_type === "object") {
        var suggestions = SLOT_SUGGESTIONS[slot.suggestion_type] || SLOT_SUGGESTIONS.object_name || [slot.label || "示例对象"];
        objects[slot.key] = suggestions[objectIndex % suggestions.length];
        objectIndex += 1;
      }
    });
    return {
      carrier_type: carrier,
      event_id: schema.id,
      variant_count: 1,
      roles: roles,
      objects: objects,
      date_text: "5500年翠象1日",
      quality: (SLOT_SUGGESTIONS.quality && SLOT_SUGGESTIONS.quality[0]) || "杰作",
      title: (SLOT_SUGGESTIONS.art_title && SLOT_SUGGESTIONS.art_title[0]) || "无题",
      material: (SLOT_SUGGESTIONS.material && SLOT_SUGGESTIONS.material[0]) || "钢铁",
      style_hint: "",
      detail_hint: "",
      scene_hint: "",
      wound_verb: (SLOT_SUGGESTIONS.wound_verb && SLOT_SUGGESTIONS.wound_verb[0]) || "击伤",
      include_detail: true,
      include_style: true,
      include_context: true,
    };
  }

  function updateTokenList(draft) {
    var tokens = [];
    var metaKeys = (draft.optional_slots || [])
      .filter(function (slot) {
        return slot.slot_type === "meta";
      })
      .map(function (slot) {
        return slot.key;
      });

    draft.required_slots.concat(draft.optional_slots).forEach(function (slot, index) {
      if (slot.slot_type === "meta") return;
      var key = sanitizeKey(slot.key || slot.label, slot.slot_type, index + 1);
      if (slot.slot_type === "role") {
        tokens.push("{" + key + "_display}");
        tokens.push("{" + key + "_name}");
        tokens.push("{" + key + "_pronoun}");
      } else {
        tokens.push("{" + key + "_name}");
        if (key === "weapon") tokens.push("{weapon_phrase}");
        if (key === "thing") tokens.push("{thing_phrase}");
        if (key === "object") tokens.push("{object_phrase}");
        if (key === "book") tokens.push("{book_display}");
      }
    });

    ["{scene_fragment}", "{event_noun}", "{date_text}"]
      .concat(metaKeys.indexOf("quality") !== -1 ? ["{quality}"] : [])
      .concat(metaKeys.indexOf("title") !== -1 ? ["{title}"] : [])
      .concat(metaKeys.indexOf("material") !== -1 ? ["{material}"] : [])
      .concat(metaKeys.indexOf("wound_verb") !== -1 ? ["{wound_verb}"] : [])
      .forEach(function (token) {
        tokens.push(token);
      });

    refs.previewTokens.innerHTML = "";
    uniq(tokens).forEach(function (token) {
      var node = document.createElement("span");
      node.className = "token";
      node.textContent = token;
      refs.previewTokens.appendChild(node);
    });
    if (!refs.previewTokens.children.length) {
      refs.previewTokens.appendChild(placeholder("填写角色/对象后，这里会列出可直接复制的变量名。"));
    }
  }

  function objectWithSchema(schema) {
    var map = {};
    map[schema.id] = schema;
    return map;
  }

  function objectWithTemplate(schema) {
    var map = {};
    map[schema.id] = schema.templates;
    return map;
  }

  function placeholder(text) {
    var node = document.createElement("div");
    node.className = "placeholder";
    node.textContent = text;
    return node;
  }

  function uniq(items) {
    var out = [];
    (items || []).forEach(function (item) {
      if (item && out.indexOf(item) === -1) out.push(item);
    });
    return out;
  }

  function esc(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;");
  }
})(window);
