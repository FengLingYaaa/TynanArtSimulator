var EVENT_SCHEMAS = window.TynanArtData.EVENT_SCHEMAS;
var SLOT_SUGGESTIONS = window.TynanArtData.SLOT_SUGGESTIONS;
var TEXT_TEMPLATES = window.TynanArtData.TEXT_TEMPLATES;

var PRESET_KEY = "rimworld_art_text_presets_v1";
var THEME_KEY = "tynan_art_theme_v1";
var CATEGORY_ORDER = [
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

var state = {
  mode: "simple",
  selectedEventId: EVENT_SCHEMAS.length ? EVENT_SCHEMAS[0].id : "",
  selectedCarrier: EVENT_SCHEMAS.length ? EVENT_SCHEMAS[0].carrier_types[0] : "",
  selectedPresetName: "",
  formRefs: {},
  suggestControls: {},
  presets: loadPresets(),
  results: [],
};

var refs = {
  carrierSelect: document.querySelector("#carrierSelect"),
  variantSelect: document.querySelector("#variantSelect"),
  formContainer: document.querySelector("#formContainer"),
  resultsContainer: document.querySelector("#resultsContainer"),
  eventList: document.querySelector("#eventList"),
  eventSearch: document.querySelector("#eventSearch"),
  openPresetBtn: document.querySelector("#openPresetBtn"),
  closePresetBtn: document.querySelector("#closePresetBtn"),
  themeToggleBtn: document.querySelector("#themeToggleBtn"),
  presetModal: document.querySelector("#presetModal"),
  presetList: document.querySelector("#presetList"),
  presetName: document.querySelector("#presetName"),
  presetTitle: document.querySelector("#presetTitle"),
  presetPronoun: document.querySelector("#presetPronoun"),
  roleTitleList: document.querySelector("#role_title_list"),
};

init();

function init() {
  hydrateStaticControls();
  applyTheme(loadTheme());
  bindStaticActions();
  renderPresetList();
  renderEventList();
  renderForm();
  renderResults([]);
}

function hydrateStaticControls() {
  refs.roleTitleList.innerHTML = SLOT_SUGGESTIONS.role_title
    .map(function (item) {
      return '<option value="' + escapeHtml(item) + '"></option>';
    })
    .join("");

  refs.presetPronoun.innerHTML = SLOT_SUGGESTIONS.pronoun
    .map(function (item) {
      return '<option value="' + item + '">' + item + "</option>";
    })
    .join("");

  refs.presetPronoun.value = "TA";
}

function bindStaticActions() {
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".suggest-field")) {
      closeAllSuggestMenus();
    }
  });

  refs.presetModal.addEventListener("click", function (event) {
    if (event.target === refs.presetModal) {
      closePresetModal();
    }
  });

  Array.prototype.forEach.call(document.querySelectorAll('input[name="mode"]'), function (node) {
    node.addEventListener("change", function () {
      var checked = document.querySelector('input[name="mode"]:checked');
      state.mode = checked ? checked.value : "simple";
      renderForm();
    });
  });

  refs.carrierSelect.addEventListener("change", function () {
    state.selectedCarrier = refs.carrierSelect.value;
  });

  refs.eventSearch.addEventListener("input", renderEventList);
  refs.openPresetBtn.addEventListener("click", openPresetModal);
  refs.closePresetBtn.addEventListener("click", closePresetModal);
  refs.themeToggleBtn.addEventListener("click", toggleTheme);

  document.querySelector("#savePresetBtn").addEventListener("click", savePreset);
  document.querySelector("#deletePresetBtn").addEventListener("click", deletePreset);
  document.querySelector("#clearPresetBtn").addEventListener("click", clearPresetInputs);
  document.querySelector("#generateBtn").addEventListener("click", handleGenerate);
  document.querySelector("#clearFormBtn").addEventListener("click", clearForm);
  document.querySelector("#copyAllBtn").addEventListener("click", copyAllResults);
}

function getCurrentSchema() {
  for (var i = 0; i < EVENT_SCHEMAS.length; i += 1) {
    if (EVENT_SCHEMAS[i].id === state.selectedEventId) {
      return EVENT_SCHEMAS[i];
    }
  }
  return EVENT_SCHEMAS[0];
}

function renderEventList() {
  var query = refs.eventSearch.value.trim().toLowerCase();
  var filtered = EVENT_SCHEMAS.filter(function (item) {
    return !query || item.label.toLowerCase().includes(query) || item.id.toLowerCase().includes(query);
  });

  refs.eventList.innerHTML = "";
  if (!filtered.length) {
    refs.eventList.appendChild(createPlaceholder("没有匹配的事件。"));
    return;
  }

  var groups = {};
  CATEGORY_ORDER.forEach(function (category) {
    groups[category] = [];
  });

  filtered.forEach(function (item) {
    var category = item.category || "未分类";
    if (!groups[category]) groups[category] = [];
    groups[category].push(item);
  });

  var foundSelected = false;
  Object.keys(groups).forEach(function (category) {
    if (!groups[category].length) return;

    var group = document.createElement("section");
    group.className = "event-group";
    group.innerHTML = '<h3 class="event-group-title">' + escapeHtml(category) + "</h3>";

    groups[category].forEach(function (schema) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "event-item" + (schema.id === state.selectedEventId ? " active" : "");
      button.textContent = schema.label;
      if (schema.id === state.selectedEventId) foundSelected = true;
      button.addEventListener("click", function () {
        state.selectedEventId = schema.id;
        renderEventList();
        renderForm();
      });
      group.appendChild(button);
    });

    refs.eventList.appendChild(group);
  });

  if (!foundSelected && filtered.length) {
    state.selectedEventId = filtered[0].id;
    renderEventList();
  }
}

function renderForm() {
  state.formRefs = {};
  state.suggestControls = {};
  var schema = getCurrentSchema();
  var carriers = schema.carrier_types;

  if (carriers.indexOf(state.selectedCarrier) === -1) {
    state.selectedCarrier = carriers[0];
  }

  refs.carrierSelect.innerHTML = carriers
    .map(function (item) {
      return '<option value="' + escapeHtml(item) + '">' + escapeHtml(item) + "</option>";
    })
    .join("");
  refs.carrierSelect.value = state.selectedCarrier;

  var wrapper = document.createElement("div");
  wrapper.className = "form-stack";
  wrapper.appendChild(renderIntro(schema));
  wrapper.appendChild(renderRoleSection(schema));
  wrapper.appendChild(renderObjectSection(schema));
  wrapper.appendChild(renderTimeSection());
  wrapper.appendChild(renderMetaSection(schema));
  if (state.mode === "complete") {
    wrapper.appendChild(renderAdvancedSection());
  }

  refs.formContainer.innerHTML = "";
  refs.formContainer.appendChild(wrapper);
}

function renderIntro(schema) {
  var intro = document.createElement("div");
  intro.className = "intro-box";
  var modeText =
    state.mode === "simple"
      ? "简易模板：仅填写核心事件记录与时间。"
      : "完整模板：可补充人物称呼、代词、品质、材料、细节、风格与开关。";

  intro.innerHTML =
    "<h2>当前模板说明</h2>" +
    "<p>分类：" +
    escapeHtml(schema.category || "未分类") +
    "</p>" +
    "<p>事件：" +
    escapeHtml(schema.label) +
    "</p>" +
    "<p>适用载体：" +
    schema.carrier_types.map(escapeHtml).join(" / ") +
    "</p>" +
    "<p>" +
    modeText +
    "</p>" +
    "<p>提示：所有输入框都可手填，建议候选用于快捷选择。</p>";
  return intro;
}

function renderRoleSection(schema) {
  var section = createSection("角色槽位");
  var grid = createGrid();
  schema.required_slots
    .filter(function (slot) {
      return slot.slot_type === "role";
    })
    .forEach(function (slot) {
      grid.appendChild(createInputField(slot.label, slot.key + "__name", personNameSuggestions()));
      if (state.mode === "complete") {
        grid.appendChild(createInputField(slot.label + "称呼/身份", slot.key + "__title", SLOT_SUGGESTIONS.role_title));
        grid.appendChild(createSelectField(slot.label + "代词", slot.key + "__pronoun", SLOT_SUGGESTIONS.pronoun, "TA"));
      }
    });
  section.appendChild(grid);
  return section;
}

function renderObjectSection(schema) {
  var section = createSection("对象槽位");
  var grid = createGrid();
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

  slots.forEach(function (slot) {
    grid.appendChild(createInputField(slot.label, slot.key + "__name", SLOT_SUGGESTIONS[slot.suggestion_type] || []));
  });

  if (!slots.length) {
    grid.appendChild(createHint("该事件不需要额外对象。"));
  }
  section.appendChild(grid);
  return section;
}

function renderTimeSection() {
  var section = createSection("作品时间");
  var grid = createGrid();
  grid.appendChild(createSelectField("年份", "time_year", SLOT_SUGGESTIONS.time_year, "5500"));
  grid.appendChild(createSelectField("象季", "time_quadrum", SLOT_SUGGESTIONS.time_quadrum, "翠象"));
  grid.appendChild(createSelectField("日期", "time_day", SLOT_SUGGESTIONS.time_day, "1"));
  grid.appendChild(createInputField("自定义时间（优先）", "time_custom", SLOT_SUGGESTIONS.date_text));
  section.appendChild(grid);
  section.appendChild(createHint("若填写自定义时间，则优先使用；否则自动组合为“55xx年 + 四象 + 1-15日”。"));
  return section;
}

function renderMetaSection(schema) {
  var section = createSection("基础补充");
  var grid = createGrid();
  var slots = schema.optional_slots.filter(function (slot) {
    return slot.slot_type === "meta" && slot.key !== "date_text" && state.mode === "complete";
  });

  slots.forEach(function (slot) {
    grid.appendChild(createInputField(slot.label, slot.key, SLOT_SUGGESTIONS[slot.suggestion_type] || []));
  });

  if (!slots.length) {
    grid.appendChild(createHint("简易模板下无需额外补充；时间请在上方“作品时间”中设置。"));
  }
  section.appendChild(grid);
  return section;
}

function renderAdvancedSection() {
  var section = createSection("完整模板附加设置");
  var grid = createGrid();
  grid.appendChild(createInputField("场景短语", "scene_hint", SLOT_SUGGESTIONS.scene_hint));
  grid.appendChild(createInputField("补充细节句", "detail_hint", SLOT_SUGGESTIONS.detail_hint));
  grid.appendChild(createInputField("风格/寓意句", "style_hint", SLOT_SUGGESTIONS.style_hint));
  section.appendChild(grid);

  var row = document.createElement("div");
  row.className = "checkbox-row";
  row.appendChild(createCheckboxField("include_detail", "加入细节句", true));
  row.appendChild(createCheckboxField("include_style", "加入风格句", true));
  row.appendChild(createCheckboxField("include_context", "加入背景句", true));
  section.appendChild(row);
  return section;
}

function createSection(title) {
  var section = document.createElement("section");
  section.className = "form-section";
  section.innerHTML = "<h3>" + escapeHtml(title) + "</h3>";
  return section;
}

function createGrid() {
  var grid = document.createElement("div");
  grid.className = "form-grid";
  return grid;
}

function createHint(text) {
  var node = document.createElement("p");
  node.className = "hint";
  node.textContent = text;
  return node;
}

function createInputField(label, key, suggestions) {
  suggestions = suggestions || [];
  var wrapper = document.createElement("label");
  wrapper.className = "suggest-field";
  wrapper.appendChild(buildLabelText(label));

  var box = document.createElement("div");
  box.className = "suggest-box";
  var input = document.createElement("input");
  input.type = "text";
  input.autocomplete = "off";
  input.className = "suggest-input";
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
  state.suggestControls[key] = { input: input, menu: menu, suggestions: Array.from(new Set(suggestions)) };

  var renderMenu = function (query) {
    var values = filterSuggestions(state.suggestControls[key].suggestions, query || "");
    menu.innerHTML = "";
    if (!values.length) {
      var empty = document.createElement("div");
      empty.className = "suggest-empty";
      empty.textContent = "无匹配项";
      menu.appendChild(empty);
      return;
    }
    values.forEach(function (item) {
      var option = document.createElement("button");
      option.type = "button";
      option.className = "suggest-option";
      option.textContent = item;
      option.addEventListener("mousedown", function (event) {
        event.preventDefault();
        input.value = item;
        hideSuggestMenu(menu);
        if (key.endsWith("__name")) applyPresetToRoleKey(key);
      });
      menu.appendChild(option);
    });
  };

  var showMenu = function () {
    if (!state.suggestControls[key].suggestions.length) return;
    closeAllSuggestMenus(menu);
    renderMenu(input.value.trim());
    menu.classList.remove("hidden");
  };

  input.addEventListener("focus", showMenu);
  input.addEventListener("click", showMenu);
  input.addEventListener("input", showMenu);
  input.addEventListener("blur", function () {
    window.setTimeout(function () {
      hideSuggestMenu(menu);
    }, 120);
  });
  toggle.addEventListener("click", function (event) {
    event.preventDefault();
    if (toggle.disabled) return;
    if (menu.classList.contains("hidden")) showMenu();
    else hideSuggestMenu(menu);
  });

  if (key.endsWith("__name")) {
    input.addEventListener("change", function () {
      applyPresetToRoleKey(key);
    });
    input.addEventListener("blur", function () {
      applyPresetToRoleKey(key);
    });
  }

  return wrapper;
}

function createSelectField(label, key, options, defaultValue) {
  var wrapper = document.createElement("label");
  var select = document.createElement("select");
  select.innerHTML = (options || [])
    .map(function (item) {
      return '<option value="' + escapeHtml(item) + '">' + escapeHtml(item) + "</option>";
    })
    .join("");
  select.value = defaultValue || (options && options[0]) || "";
  wrapper.appendChild(buildLabelText(label));
  wrapper.appendChild(select);
  state.formRefs[key] = select;
  return wrapper;
}

function createCheckboxField(key, label, defaultValue) {
  var wrapper = document.createElement("label");
  var input = document.createElement("input");
  input.type = "checkbox";
  input.checked = defaultValue;
  wrapper.appendChild(input);
  wrapper.appendChild(document.createTextNode(label));
  state.formRefs[key] = input;
  return wrapper;
}

function buildLabelText(text) {
  var span = document.createElement("span");
  span.textContent = text;
  return span;
}

function filterSuggestions(suggestions, query) {
  var normalized = String(query || "").trim().toLowerCase();
  if (!normalized) return suggestions;
  var prefix = suggestions.filter(function (item) {
    return item.toLowerCase().indexOf(normalized) === 0;
  });
  var fuzzy = suggestions.filter(function (item) {
    return item.toLowerCase().indexOf(normalized) !== -1 && prefix.indexOf(item) === -1;
  });
  return prefix.concat(fuzzy);
}

function closeAllSuggestMenus(exceptMenu) {
  Object.keys(state.suggestControls).forEach(function (key) {
    var menu = state.suggestControls[key].menu;
    if (menu !== exceptMenu) hideSuggestMenu(menu);
  });
}

function hideSuggestMenu(menu) {
  menu.classList.add("hidden");
}

function loadPresets() {
  try {
    return JSON.parse(localStorage.getItem(PRESET_KEY) || "[]");
  } catch (_error) {
    return [];
  }
}

function savePresets() {
  localStorage.setItem(PRESET_KEY, JSON.stringify(state.presets));
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
      escapeHtml(preset.name) +
      "</strong><div class=\"preset-meta\">" +
      escapeHtml(preset.title || "未填写称呼") +
      " / " +
      escapeHtml(preset.pronoun || "TA") +
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
  if (!name) {
    window.alert("请先填写预设人物姓名。");
    return;
  }
  var preset = {
    name: name,
    title: refs.presetTitle.value.trim(),
    pronoun: refs.presetPronoun.value || "TA",
  };
  state.presets = [preset].concat(
    state.presets.filter(function (item) {
      return item.name !== name;
    })
  );
  state.selectedPresetName = name;
  savePresets();
  renderPresetList();
  renderForm();
}

function deletePreset() {
  if (!state.selectedPresetName) {
    window.alert("请先从列表中选中要删除的人物预设。");
    return;
  }
  state.presets = state.presets.filter(function (item) {
    return item.name !== state.selectedPresetName;
  });
  savePresets();
  clearPresetInputs();
  renderForm();
}

function clearPresetInputs() {
  state.selectedPresetName = "";
  refs.presetName.value = "";
  refs.presetTitle.value = "";
  refs.presetPronoun.value = "TA";
  renderPresetList();
}

function openPresetModal() {
  refs.presetModal.classList.remove("hidden");
  refs.presetModal.setAttribute("aria-hidden", "false");
}

function closePresetModal() {
  refs.presetModal.classList.add("hidden");
  refs.presetModal.setAttribute("aria-hidden", "true");
}

function loadTheme() {
  return localStorage.getItem(THEME_KEY) || "light";
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme === "dark" ? "dark" : "light";
  refs.themeToggleBtn.textContent = theme === "dark" ? "切换日间" : "夜间模式";
}

function toggleTheme() {
  var next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem(THEME_KEY, next);
  applyTheme(next);
}

function personNameSuggestions() {
  var ordered = [];
  state.presets
    .map(function (item) {
      return item.name;
    })
    .concat(SLOT_SUGGESTIONS.person_name)
    .forEach(function (item) {
      if (item && ordered.indexOf(item) === -1) ordered.push(item);
    });
  return ordered;
}

function applyPresetToRoleKey(key) {
  var input = state.formRefs[key];
  if (!input) return;
  var preset = state.presets.find(function (item) {
    return item.name === input.value.trim();
  });
  if (!preset) return;
  var base = key.replace(/__name$/, "");
  var titleRef = state.formRefs[base + "__title"];
  var pronounRef = state.formRefs[base + "__pronoun"];
  if (titleRef) titleRef.value = preset.title || "";
  if (pronounRef) pronounRef.value = preset.pronoun || "TA";
}

function handleGenerate() {
  try {
    var context = collectContext();
    var results = generateTexts(context);
    state.results = results;
    renderResults(results);
  } catch (error) {
    window.alert(error.message || String(error));
  }
}

function collectContext() {
  var schema = getCurrentSchema();
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
  if (!ref || typeof ref.value !== "string") return "";
  return ref.value.trim();
}

function checkedOf(key, fallback) {
  var ref = state.formRefs[key];
  if (!ref) return fallback;
  return !!ref.checked;
}

function buildDateText() {
  var custom = valueOf("time_custom");
  if (custom) return custom;
  var year = valueOf("time_year");
  var quadrum = valueOf("time_quadrum");
  var day = valueOf("time_day");
  return year && quadrum && day ? year + "年" + quadrum + day + "日" : "";
}

function validateContext(context) {
  var schema = getCurrentSchema();
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
  return schema;
}

function generateTexts(context) {
  var schema = validateContext(context);
  var count = Math.max(1, Math.min(5, Number(context.variant_count || 1)));
  var results = [];
  var seen = {};
  var attempts = 0;
  var maxAttempts = count * 30;

  while (results.length < count && attempts < maxAttempts) {
    attempts += 1;
    var text = generateSingleText(schema, context);
    var signature = dedupeSignature(text);
    if (seen[signature]) continue;
    seen[signature] = true;
    results.push({ text: text, event_id: schema.id });
  }

  if (!results.length) throw new Error("未能生成可用文本，请检查输入内容。");
  return results;
}

function generateSingleText(schema, context) {
  var eventPack = TEXT_TEMPLATES.event_templates[schema.id];
  var carrierOpeners = TEXT_TEMPLATES.carrier_openers[context.carrier_type];
  var mapping = buildMapping(schema, context, eventPack);
  var mainImage = renderTemplate(pick(eventPack.main_images), mapping);
  var opening = renderTemplate(pick(carrierOpeners), mergeObjects(mapping, { main_image: mainImage }));
  var sentences = [ensureSentence(opening)];

  if (context.include_detail) {
    var detail = renderTemplate(context.detail_hint || pick(eventPack.detail_sentences || TEXT_TEMPLATES.default_detail_sentences), mapping);
    if (detail) sentences.push(ensureSentence(detail));
  }
  if (context.include_style) {
    var style = renderTemplate(context.style_hint || pick(eventPack.style_sentences || TEXT_TEMPLATES.default_style_sentences), mapping);
    if (style) sentences.push(ensureSentence(style));
  }
  if (mapping.title) {
    var titleSentence = renderTemplate(pick(TEXT_TEMPLATES.title_sentences), mapping);
    if (titleSentence) sentences.push(ensureSentence(titleSentence));
  }
  if (context.include_context) {
    var eventNoun = renderTemplate(pick(eventPack.event_nouns), mapping);
    var contextText = renderTemplate(pick(TEXT_TEMPLATES.context_sentences), mergeObjects(mapping, { event_noun: eventNoun }));
    if (contextText) sentences.push(ensureSentence(contextText));
  }
  return normalizeOutput(sentences.join(""));
}

function buildMapping(schema, context, eventPack) {
  var mapping = {};
  schema.required_slots.concat(schema.optional_slots).forEach(function (slot) {
    if (slot.slot_type === "role") {
      var role = context.roles[slot.key] || {};
      var name = (role.name || "").trim();
      var title = (role.title || "").trim();
      var pronoun = (role.pronoun || "").trim() || pick(SLOT_SUGGESTIONS.pronoun);
      mapping[slot.key + "_name"] = name;
      mapping[slot.key + "_display"] = title ? title + name : name;
      mapping[slot.key + "_pronoun"] = pronoun;
    } else if (slot.slot_type === "object") {
      mapping[slot.key + "_name"] = (context.objects[slot.key] || "").trim() || pick(SLOT_SUGGESTIONS[slot.suggestion_type] || [""]);
    }
  });

  mapping.quality = (context.quality || "").trim() || pick(SLOT_SUGGESTIONS.quality || [""]);
  mapping.material = (context.material || "").trim();
  mapping.title = (context.title || "").trim();
  mapping.wound_verb = (context.wound_verb || "").trim() || pick(SLOT_SUGGESTIONS.wound_verb || ["击伤"]);
  mapping.date_text = (context.date_text || "").trim() || pick(SLOT_SUGGESTIONS.date_text || ["某年某象某日"]);
  mapping.scene_text = (context.scene_hint || "").trim() || pick(eventPack.scene_phrases || TEXT_TEMPLATES.default_scene_phrases);
  mapping.scene_fragment = mapping.scene_text ? "，" + mapping.scene_text : "";

  mapping.thing_phrase = buildItemPhrase(mapping.thing_name || "", mapping.quality, mapping.material);
  mapping.object_phrase = buildItemPhrase(mapping.object_name || "", "", mapping.material);
  mapping.book_display = wrapBookTitle(mapping.book_name || "");
  mapping.weapon_name = mapping.weapon_name || pick(SLOT_SUGGESTIONS.weapon_name || [""]);
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

function mergeObjects(base, extra) {
  var merged = {};
  Object.keys(base).forEach(function (key) {
    merged[key] = base[key];
  });
  Object.keys(extra).forEach(function (key) {
    merged[key] = extra[key];
  });
  return merged;
}

function pick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function renderTemplate(template, mapping) {
  return template.replace(/\{([^}]+)\}/g, function (_match, key) {
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
    var materialRoot = material.endsWith("制") ? material.slice(0, -1) : material;
    if (materialRoot && name.indexOf(materialRoot) === -1) {
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

function renderResults(results) {
  refs.resultsContainer.innerHTML = "";
  if (!results.length) {
    refs.resultsContainer.appendChild(createPlaceholder("右侧将显示 1–5 条中文艺术文本候选。填写中间表单后点击“生成”即可。"));
    return;
  }

  results.forEach(function (result, index) {
    var card = document.createElement("article");
    card.className = "result-card";
    card.innerHTML =
      "<h3>候选 " +
      (index + 1) +
      '</h3><textarea readonly>' +
      escapeHtml(result.text) +
      '</textarea><div class="button-row"><button type="button" class="ghost">复制此条</button></div>';
    card.querySelector("button").addEventListener("click", function () {
      copyText(result.text);
    });
    refs.resultsContainer.appendChild(card);
  });
}

function createPlaceholder(text) {
  var box = document.createElement("div");
  box.className = "placeholder";
  box.textContent = text;
  return box;
}

function clearForm() {
  Object.keys(state.formRefs).forEach(function (key) {
    var ref = state.formRefs[key];
    if (ref instanceof HTMLInputElement && ref.type === "checkbox") ref.checked = true;
    else ref.value = "";
  });
  if (state.formRefs.time_year) state.formRefs.time_year.value = "5500";
  if (state.formRefs.time_quadrum) state.formRefs.time_quadrum.value = "翠象";
  if (state.formRefs.time_day) state.formRefs.time_day.value = "1";
  state.results = [];
  renderResults([]);
}

function copyText(text) {
  navigator.clipboard.writeText(text).then(
    function () {
      window.alert("文本已复制到剪贴板。");
    },
    function () {
      window.alert("复制失败，请手动复制。");
    }
  );
}

function copyAllResults() {
  if (!state.results.length) {
    window.alert("请先生成文本。");
    return;
  }
  var merged = state.results
    .map(function (item, index) {
      return "[候选 " + (index + 1) + "]\n" + item.text;
    })
    .join("\n\n");
  copyText(merged);
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;");
}
