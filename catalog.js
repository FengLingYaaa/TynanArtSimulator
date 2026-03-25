;(function (global) {
  var CATEGORY_ORDER = [
    "自定义类",
    "艺术与创作",
    "劳作与技艺",
    "社交与关系",
    "动物与自然",
    "日常与娱乐",
    "精神与仪式",
    "战斗与暴力",
    "医疗与生理",
    "迁徙与休眠",
    "异象与灾难",
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
