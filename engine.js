;(function (global) {
  function pick(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  function mergeObjects(base, extra) {
    var out = {};
    Object.keys(base).forEach(function (key) {
      out[key] = base[key];
    });
    Object.keys(extra).forEach(function (key) {
      out[key] = extra[key];
    });
    return out;
  }

  function renderTemplate(template, mapping) {
    return String(template || "").replace(/\{([^}]+)\}/g, function (_match, key) {
      return Object.prototype.hasOwnProperty.call(mapping, key) ? mapping[key] : "";
    });
  }

  function buildItemPhrase(name, quality, material) {
    name = String(name || "").trim();
    quality = String(quality || "").trim();
    material = String(material || "").trim();
    if (!name) return "一件作品";
    var materialPhrase = "";
    if (material) {
      var root = material.endsWith("制") ? material.slice(0, -1) : material;
      if (root && name.indexOf(root) === -1) {
        materialPhrase = material.endsWith("制") ? material : material + "制";
      }
    }
    if (quality && materialPhrase) return quality + "品质的" + materialPhrase + name;
    if (quality) return quality + "品质的" + name;
    if (materialPhrase) return materialPhrase + name;
    return name;
  }

  function wrapBookTitle(name) {
    name = String(name || "").trim();
    if (!name) return "《无题之书》";
    if (name.indexOf("《") === 0 && name.lastIndexOf("》") === name.length - 1) return name;
    return "《" + name + "》";
  }

  function ensureSentence(text) {
    var cleaned = String(text || "").trim();
    if (!cleaned) return "";
    return "。！？".indexOf(cleaned.slice(-1)) !== -1 ? cleaned : cleaned + "。";
  }

  function normalizeOutput(text) {
    return String(text || "")
      .replace(/\s+/g, "")
      .replace(/，。/g, "。")
      .replace(/。。+/g, "。")
      .replace(/，，+/g, "，")
      .replace(/([，。！？])\1+/g, "$1")
      .replace(/([，。！？])([，。！？])/g, function (match) {
        return match.indexOf("。") !== -1 ? "。" : match.charAt(0);
      })
      .replace(/^，+|，+$/g, "");
  }

  function dedupeSignature(text) {
    return String(text || "").replace(/[，。！？；：“”《》、\s]/g, "");
  }

  function buildMapping(schema, context, eventPack, bundle) {
    var mapping = {};
    schema.required_slots.concat(schema.optional_slots).forEach(function (slot) {
      if (slot.slot_type === "role") {
        var role = context.roles[slot.key] || {};
        var name = String(role.name || "").trim();
        var title = String(role.title || "").trim();
        var pronoun = String(role.pronoun || "").trim() || pick(bundle.SLOT_SUGGESTIONS.pronoun);
        mapping[slot.key + "_name"] = name;
        mapping[slot.key + "_display"] = title ? title + name : name;
        mapping[slot.key + "_pronoun"] = pronoun;
      } else if (slot.slot_type === "object") {
        mapping[slot.key + "_name"] =
          String(context.objects[slot.key] || "").trim() || pick(bundle.SLOT_SUGGESTIONS[slot.suggestion_type] || [""]);
      }
    });

    mapping.quality = String(context.quality || "").trim() || pick(bundle.SLOT_SUGGESTIONS.quality || [""]);
    mapping.material = String(context.material || "").trim();
    mapping.title = String(context.title || "").trim();
    mapping.wound_verb = String(context.wound_verb || "").trim() || pick(bundle.SLOT_SUGGESTIONS.wound_verb || ["击伤"]);
    mapping.date_text = String(context.date_text || "").trim() || pick(bundle.SLOT_SUGGESTIONS.date_text || ["某年某象某日"]);
    mapping.scene_text = String(context.scene_hint || "").trim() || pick(eventPack.scene_phrases || bundle.TEXT_TEMPLATES.default_scene_phrases);
    mapping.scene_fragment = mapping.scene_text ? "，" + mapping.scene_text : "";

    mapping.thing_phrase = buildItemPhrase(mapping.thing_name || "", mapping.quality, mapping.material);
    mapping.object_phrase = buildItemPhrase(mapping.object_name || "", "", mapping.material);
    mapping.book_display = wrapBookTitle(mapping.book_name || "");
    mapping.weapon_name = mapping.weapon_name || pick(bundle.SLOT_SUGGESTIONS.weapon_name || [""]);
    mapping.weapon_phrase = mapping.weapon_name ? "一把" + mapping.weapon_name : "一把武器";
    mapping.project_name = mapping.project_name || "";
    mapping.animal_name = mapping.animal_name || "";
    mapping.training_name = mapping.training_name || "";
    mapping.skill_name = mapping.skill_name || "";
    mapping.material_name = mapping.material_name || "";
    mapping.game_name = mapping.game_name || "";
    mapping.illness_name = mapping.illness_name || "";
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

  function generateSingle(schema, context, templateMap, bundle) {
    var eventPack = templateMap[schema.id];
    var carrierOpeners = bundle.TEXT_TEMPLATES.carrier_openers[context.carrier_type];
    var mapping = buildMapping(schema, context, eventPack, bundle);
    var mainImage = renderTemplate(pick(eventPack.main_images), mapping);
    var opening = renderTemplate(pick(carrierOpeners), mergeObjects(mapping, { main_image: mainImage }));
    var sentences = [ensureSentence(opening)];

    if (context.include_detail) {
      var detail = renderTemplate(context.detail_hint || pick(eventPack.detail_sentences || bundle.TEXT_TEMPLATES.default_detail_sentences), mapping);
      if (detail) sentences.push(ensureSentence(detail));
    }
    if (context.include_style) {
      var style = renderTemplate(context.style_hint || pick(eventPack.style_sentences || bundle.TEXT_TEMPLATES.default_style_sentences), mapping);
      if (style) sentences.push(ensureSentence(style));
    }
    if (mapping.title) {
      var titleSentence = renderTemplate(pick(bundle.TEXT_TEMPLATES.title_sentences), mapping);
      if (titleSentence) sentences.push(ensureSentence(titleSentence));
    }
    if (context.include_context) {
      var eventNoun = renderTemplate(pick(eventPack.event_nouns), mapping);
      var contextText = renderTemplate(pick(bundle.TEXT_TEMPLATES.context_sentences), mergeObjects(mapping, { event_noun: eventNoun }));
      if (contextText) sentences.push(ensureSentence(contextText));
    }

    return normalizeOutput(sentences.join(""));
  }

  function generate(context, bundle) {
    var schema = bundle.eventMap[context.event_id];
    validateContext(schema, context);
    var count = Math.max(1, Math.min(5, Number(context.variant_count || 1)));
    var results = [];
    var seen = {};
    var attempts = 0;
    while (results.length < count && attempts < count * 30) {
      attempts += 1;
      var text = generateSingle(schema, context, bundle.templateMap, bundle);
      var signature = dedupeSignature(text);
      if (seen[signature]) continue;
      seen[signature] = true;
      results.push({ text: text, event_id: schema.id });
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
