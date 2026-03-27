// ===== storage.js =====
;(function (global) {
  var COOKIE_DAYS = 365;
  var COOKIE_LIMIT = 3500;
  var STORAGE_PREFIX = "tynan_local_";
  var KEYS = {
    presets: "tynan_art_presets",
    customEvents: "tynan_art_custom_events",
    favorites: "tynan_art_favorites",
    tutorial: "tynan_art_tutorial",
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

  function loadFavoriteEvents() {
    return loadJson(KEYS.favorites, []);
  }

  function saveFavoriteEvents(items) {
    saveJson(KEYS.favorites, items || []);
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

  function loadTutorialState() {
    var value = getLocal(KEYS.tutorial) || getCookie(KEYS.tutorial) || "";
    if (value && !getLocal(KEYS.tutorial)) setLocal(KEYS.tutorial, value);
    return value;
  }

  function saveTutorialState(value) {
    var nextValue = String(value || "");
    setLocal(KEYS.tutorial, nextValue);
    setCookie(KEYS.tutorial, nextValue, COOKIE_DAYS);
  }

  function hasExistingUserData() {
    return !!(
      getLocal(KEYS.presets) ||
      getCookie(KEYS.presets) ||
      getLocal(KEYS.customEvents) ||
      getCookie(KEYS.customEvents) ||
      getLocal(KEYS.favorites) ||
      getCookie(KEYS.favorites) ||
      getLocal(KEYS.theme) ||
      getCookie(KEYS.theme)
    );
  }

  function clearAll() {
    removeCookie(KEYS.presets);
    removeCookie(KEYS.customEvents);
    removeCookie(KEYS.favorites);
    removeCookie(KEYS.tutorial);
    removeCookie(KEYS.theme);
    removeLocal(KEYS.presets);
    removeLocal(KEYS.customEvents);
    removeLocal(KEYS.favorites);
    removeLocal(KEYS.tutorial);
    removeLocal(KEYS.theme);
  }

  global.TynanStorage = {
    keys: KEYS,
    loadPresets: loadPresets,
    savePresets: savePresets,
    loadCustomEvents: loadCustomEvents,
    saveCustomEvents: saveCustomEvents,
    loadFavoriteEvents: loadFavoriteEvents,
    saveFavoriteEvents: saveFavoriteEvents,
    loadTutorialState: loadTutorialState,
    saveTutorialState: saveTutorialState,
    hasExistingUserData: hasExistingUserData,
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
      [/关于([^。！？]*?)的(?:时光|情景|场面)的往事/g, "关于$1的往事"],
      [/发生在([^。！？]*?)的([^。！？]*?)的(?:时光|情景|场面)的故事/g, "发生在$1的$2的故事"],
      [/([。！？])的故事/g, "的故事"],
      [/([。！？])的往事/g, "的往事"],
      [/([。！？])的情景/g, "的情景"],
      [/在在/g, "在"],
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
      [/头上带着一些风雪帽/g, "头上戴着一些风雪帽"],
      [/头上(?:带|戴)着(?:几顶|数顶|一些)?风雪帽/g, "身上裹着厚实的御寒衣物"]
    ]);

    cleaned = cleaned
      .replace(/一只一([个片棵株位名])/g, "一$1")
      .replace(/一件一([个片棵株位名])/g, "一$1")
      .replace(/一只一([^，。]{1,4})/g, "一只$1")
      .replace(/一件一([^，。]{1,4})/g, "一件$1")
      .replace(/(几|数)件([^，。]{0,6}(?:师|者|家|手|兵|员|卫|匠|民|商|徒|鬼))/g, "$1位$2")
      .replace(/(几|数)只([^，。]{0,6}(?:师|者|家|手|兵|员|卫|匠|民|商|徒|鬼))/g, "$1位$2")
      .replace(/(几|数)(位|个)风雪帽/g, "$1顶风雪帽")
      .replace(/数顶风雪帽/g, "几顶风雪帽");

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
      finished_crafting: "completing work on",
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
      caravan_meeting: "meeting another caravan",
      caravan_demand: "facing caravan extortion",
      caravan_ambush_manhunter: "being ambushed by manhunters on a caravan journey",
      caravan_remote_mining: "remotely mining",
      caravan_ambush_defeated: "defeating a caravan ambush",
      caravan_assault_success: "winning a caravan assault",
      caravan_fled: "escaping danger with a caravan",
      surgery: "performing surgery on",
      birth: "giving birth to",
      struck_mineable: "mining",
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
      vacuum_exposure: "being exposed to vacuum",
      orbital_debris: "witnessing orbital debris",
      studied_entity: "studying an entity",
      death_pall: "enduring deathpall",
      unnatural_darkness: "enduring unnatural darkness",
      closed_void: "closing a void node",
      embraced_void: "embracing the void",
      performed_psychic_ritual: "performing a psychic ritual",
      attended_concert: "attending a concert",
      held_concert: "holding a concert",
      noxious_haze: "enduring noxious haze",
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
    if ((schema.id === "finished_construction" || schema.id === "finished_crafting") && mapping.object_name) action += " " + mapping.object_phrase_en;
    else if (schema.id === "game_play" && mapping.game_name_en) action = "playing at " + withArticle(mapping.game_name_en);
    else if ((schema.id === "struck_mineable" || schema.id === "caravan_remote_mining") && mapping.material_name_en) action += " " + mapping.material_name_en;
    else if (schema.id === "skill_mastery" && mapping.skill_name_en) action += " " + mapping.skill_name_en;
    else if (schema.id === "skill_mastery_passion" && mapping.skill_name_en) action += " " + mapping.skill_name_en;
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
