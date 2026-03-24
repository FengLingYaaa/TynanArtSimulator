const { EVENT_SCHEMAS, SLOT_SUGGESTIONS, TEXT_TEMPLATES } = window.TynanArtData;

const PRESET_KEY = "rimworld_art_text_presets_v1";
const THEME_KEY = "tynan_art_theme_v1";
const CATEGORY_ORDER = [
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

const state = {
  mode: "simple",
  selectedEventId: EVENT_SCHEMAS[0]?.id ?? "",
  selectedCarrier: EVENT_SCHEMAS[0]?.carrier_types?.[0] ?? "",
  selectedPresetName: "",
  formRefs: {},
  suggestControls: {},
  presets: loadPresets(),
  results: [],
};

const refs = {
  carrierSelect: document.querySelector("#carrierSelect"),
  variantSelect: document.querySelector("#variantSelect"),
  formContainer: document.querySelector("#formContainer"),
  resultsContainer: document.querySelector("#resultsContainer"),
  openPresetBtn: document.querySelector("#openPresetBtn"),
  closePresetBtn: document.querySelector("#closePresetBtn"),
  themeToggleBtn: document.querySelector("#themeToggleBtn"),
  presetModal: document.querySelector("#presetModal"),
  eventList: document.querySelector("#eventList"),
  eventSearch: document.querySelector("#eventSearch"),
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
    .map((item) => `<option value="${escapeHtml(item)}"></option>`)
    .join("");
  refs.presetPronoun.innerHTML = SLOT_SUGGESTIONS.pronoun
    .map((item) => `<option value="${item}">${item}</option>`)
    .join("");
  refs.presetPronoun.value = "TA";
}

function bindStaticActions() {
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".suggest-field")) closeAllSuggestMenus();
  });

  refs.presetModal.addEventListener("click", (event) => {
    if (event.target === refs.presetModal) closePresetModal();
  });

  document.querySelectorAll('input[name="mode"]').forEach((node) => {
    node.addEventListener("change", () => {
      state.mode = document.querySelector('input[name="mode"]:checked')?.value ?? "simple";
      renderForm();
    });
  });

  refs.carrierSelect.addEventListener("change", () => {
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
  return EVENT_SCHEMAS.find((item) => item.id === state.selectedEventId) ?? EVENT_SCHEMAS[0];
}

function renderEventList() {
  const query = refs.eventSearch.value.trim().toLowerCase();
  const filtered = EVENT_SCHEMAS.filter((item) => !query || item.label.toLowerCase().includes(query) || item.id.toLowerCase().includes(query));

  refs.eventList.innerHTML = "";
  if (!filtered.length) {
    refs.eventList.appendChild(createPlaceholder("没有匹配的事件。"));
    return;
  }

  const grouped = new Map(CATEGORY_ORDER.map((category) => [category, []]));
  filtered.forEach((item) => {
    const category = item.category || "未分类";
    if (!grouped.has(category)) grouped.set(category, []);
    grouped.get(category).push(item);
  });

  let foundSelected = false;
  grouped.forEach((items, category) => {
    if (!items.length) return;
    const group = document.createElement("section");
    group.className = "event-group";
    group.innerHTML = `<h3 class="event-group-title">${escapeHtml(category)}</h3>`;
    items.forEach((schema) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `event-item${schema.id === state.selectedEventId ? " active" : ""}`;
      button.textContent = schema.label;
      if (schema.id === state.selectedEventId) foundSelected = true;
      button.addEventListener("click", () => {
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
  const schema = getCurrentSchema();
  const carriers = schema.carrier_types;
  if (!carriers.includes(state.selectedCarrier)) {
    state.selectedCarrier = carriers[0];
  }

  refs.carrierSelect.innerHTML = carriers.map((item) => `<option value="${escapeHtml(item)}">${escapeHtml(item)}</option>`).join("");
  refs.carrierSelect.value = state.selectedCarrier;

  const wrapper = document.createElement("div");
  wrapper.className = "form-stack";
  wrapper.appendChild(renderIntro(schema));
  wrapper.appendChild(renderRoleSection(schema));
  wrapper.appendChild(renderObjectSection(schema));
  wrapper.appendChild(renderTimeSection());
  wrapper.appendChild(renderMetaSection(schema));
  if (state.mode === "complete") wrapper.appendChild(renderAdvancedSection());

  refs.formContainer.innerHTML = "";
  refs.formContainer.appendChild(wrapper);
}

function renderIntro(schema) {
  const intro = document.createElement("div");
  intro.className = "intro-box";
  const modeText =
    state.mode === "simple"
      ? "简易模板：仅填写核心事件记录与时间。"
      : "完整模板：可补充人物称呼、代词、品质、材料、细节、风格与开关。";
  intro.innerHTML = `
    <h2>当前模板说明</h2>
    <p>分类：${escapeHtml(schema.category || "未分类")}</p>
    <p>事件：${escapeHtml(schema.label)}</p>
    <p>适用载体：${schema.carrier_types.map(escapeHtml).join(" / ")}</p>
    <p>${modeText}</p>
    <p>提示：所有输入框都可手填，建议候选用于快捷选择。</p>
  `;
  return intro;
}

function renderRoleSection(schema) {
  const section = createSection("角色槽位");
  const grid = createGrid();
  schema.required_slots.filter((slot) => slot.slot_type === "role").forEach((slot) => {
    grid.appendChild(createInputField(slot.label, `${slot.key}__name`, personNameSuggestions()));
    if (state.mode === "complete") {
      grid.appendChild(createInputField(`${slot.label}称呼/身份`, `${slot.key}__title`, SLOT_SUGGESTIONS.role_title));
      grid.appendChild(createSelectField(`${slot.label}代词`, `${slot.key}__pronoun`, SLOT_SUGGESTIONS.pronoun, "TA"));
    }
  });
  section.appendChild(grid);
  return section;
}

function renderObjectSection(schema) {
  const section = createSection("对象槽位");
  const grid = createGrid();
  let slots = schema.required_slots.filter((slot) => slot.slot_type === "object");
  if (state.mode === "complete") {
    slots = slots.concat(schema.optional_slots.filter((slot) => slot.slot_type === "object"));
  }
  slots.forEach((slot) => {
    grid.appendChild(createInputField(slot.label, `${slot.key}__name`, SLOT_SUGGESTIONS[slot.suggestion_type] ?? []));
  });
  if (!slots.length) grid.appendChild(createHint("该事件不需要额外对象。"));
  section.appendChild(grid);
  return section;
}

function renderTimeSection() {
  const section = createSection("作品时间");
  const grid = createGrid();
  grid.appendChild(createSelectField("年份", "time_year", SLOT_SUGGESTIONS.time_year, "5500"));
  grid.appendChild(createSelectField("象季", "time_quadrum", SLOT_SUGGESTIONS.time_quadrum, "翠象"));
  grid.appendChild(createSelectField("日期", "time_day", SLOT_SUGGESTIONS.time_day, "1"));
  grid.appendChild(createInputField("自定义时间（优先）", "time_custom", SLOT_SUGGESTIONS.date_text));
  section.appendChild(grid);
  section.appendChild(createHint("若填写自定义时间，则优先使用；否则自动组合为“55xx年 + 四象 + 1-15日”。"));
  return section;
}

function renderMetaSection(schema) {
  const section = createSection("基础补充");
  const grid = createGrid();
  const slots = schema.optional_slots.filter((slot) => slot.slot_type === "meta" && slot.key !== "date_text" && state.mode === "complete");
  slots.forEach((slot) => {
    grid.appendChild(createInputField(slot.label, slot.key, SLOT_SUGGESTIONS[slot.suggestion_type] ?? []));
  });
  if (!slots.length) grid.appendChild(createHint("简易模板下无需额外补充；时间请在上方“作品时间”中设置。"));
  section.appendChild(grid);
  return section;
}

function renderAdvancedSection() {
  const section = createSection("完整模板附加设置");
  const grid = createGrid();
  grid.appendChild(createInputField("场景短语", "scene_hint", SLOT_SUGGESTIONS.scene_hint));
  grid.appendChild(createInputField("补充细节句", "detail_hint", SLOT_SUGGESTIONS.detail_hint));
  grid.appendChild(createInputField("风格/寓意句", "style_hint", SLOT_SUGGESTIONS.style_hint));
  section.appendChild(grid);

  const row = document.createElement("div");
  row.className = "checkbox-row";
  row.appendChild(createCheckboxField("include_detail", "加入细节句", true));
  row.appendChild(createCheckboxField("include_style", "加入风格句", true));
  row.appendChild(createCheckboxField("include_context", "加入背景句", true));
  section.appendChild(row);
  return section;
}

function createSection(title) {
  const section = document.createElement("section");
  section.className = "form-section";
  section.innerHTML = `<h3>${escapeHtml(title)}</h3>`;
  return section;
}

function createGrid() {
  const grid = document.createElement("div");
  grid.className = "form-grid";
  return grid;
}

function createHint(text) {
  const node = document.createElement("p");
  node.className = "hint";
  node.textContent = text;
  return node;
}

function createInputField(label, key, suggestions = []) {
  const wrapper = document.createElement("label");
  wrapper.className = "suggest-field";
  wrapper.appendChild(buildLabelText(label));

  const box = document.createElement("div");
  box.className = "suggest-box";
  const input = document.createElement("input");
  input.type = "text";
  input.autocomplete = "off";
  input.className = "suggest-input";
  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "suggest-toggle";
  toggle.textContent = "▾";
  const menu = document.createElement("div");
  menu.className = "suggest-menu hidden";

  if (!suggestions.length) toggle.disabled = true;
  box.appendChild(input);
  box.appendChild(toggle);
  box.appendChild(menu);
  wrapper.appendChild(box);

  state.formRefs[key] = input;
  state.suggestControls[key] = { input, menu, suggestions: [...new Set(suggestions)] };

  const renderMenu = (query = "") => {
    const values = filterSuggestions(state.suggestControls[key].suggestions, query);
    menu.innerHTML = "";
    if (!values.length) {
      const empty = document.createElement("div");
      empty.className = "suggest-empty";
      empty.textContent = "无匹配项";
      menu.appendChild(empty);
      return;
    }
    values.forEach((item) => {
      const option = document.createElement("button");
      option.type = "button";
      option.className = "suggest-option";
      option.textContent = item;
      option.addEventListener("mousedown", (event) => {
        event.preventDefault();
        input.value = item;
        hideSuggestMenu(menu);
        if (key.endsWith("__name")) applyPresetToRoleKey(key);
      });
      menu.appendChild(option);
    });
  };

  const showMenu = () => {
    if (!state.suggestControls[key].suggestions.length) return;
    closeAllSuggestMenus(menu);
    renderMenu(input.value.trim());
    menu.classList.remove("hidden");
  };

  input.addEventListener("focus", showMenu);
  input.addEventListener("click", showMenu);
  input.addEventListener("input", showMenu);
  input.addEventListener("blur", () => window.setTimeout(() => hideSuggestMenu(menu), 120));
  toggle.addEventListener("click", (event) => {
    event.preventDefault();
    if (toggle.disabled) return;
    menu.classList.contains("hidden") ? showMenu() : hideSuggestMenu(menu);
  });

  if (key.endsWith("__name")) {
    input.addEventListener("change", () => applyPresetToRoleKey(key));
    input.addEventListener("blur", () => applyPresetToRoleKey(key));
  }
  return wrapper;
}

function createSelectField(label, key, options, defaultValue = "") {
  const wrapper = document.createElement("label");
  const select = document.createElement("select");
  select.innerHTML = options.map((item) => `<option value="${escapeHtml(item)}">${escapeHtml(item)}</option>`).join("");
  select.value = defaultValue || options[0] || "";
  wrapper.appendChild(buildLabelText(label));
  wrapper.appendChild(select);
  state.formRefs[key] = select;
  return wrapper;
}

function createCheckboxField(key, label, defaultValue) {
  const wrapper = document.createElement("label");
  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = defaultValue;
  wrapper.appendChild(input);
  wrapper.appendChild(document.createTextNode(label));
  state.formRefs[key] = input;
  return wrapper;
}

function buildLabelText(text) {
  const span = document.createElement("span");
  span.textContent = text;
  return span;
}

function filterSuggestions(suggestions, query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return suggestions;
  const prefix = suggestions.filter((item) => item.toLowerCase().startsWith(normalized));
  const fuzzy = suggestions.filter((item) => item.toLowerCase().includes(normalized) && !prefix.includes(item));
  return [...prefix, ...fuzzy];
}

function closeAllSuggestMenus(exceptMenu = null) {
  Object.values(state.suggestControls).forEach((control) => {
    if (control.menu !== exceptMenu) hideSuggestMenu(control.menu);
  });
}

function hideSuggestMenu(menu) {
  menu.classList.add("hidden");
}

function loadPresets() {
  try {
    return JSON.parse(localStorage.getItem(PRESET_KEY) || "[]");
  } catch {
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

  state.presets.forEach((preset) => {
    const item = document.createElement("li");
    item.className = `preset-item${state.selectedPresetName === preset.name ? " active" : ""}`;
    item.innerHTML = `
      <div>
        <strong>${escapeHtml(preset.name)}</strong>
        <div class="preset-meta">${escapeHtml(preset.title || "未填写称呼")} / ${escapeHtml(preset.pronoun || "TA")}</div>
      </div>
    `;
    item.addEventListener("click", () => {
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
  const name = refs.presetName.value.trim();
  if (!name) {
    window.alert("请先填写预设人物姓名。");
    return;
  }
  const preset = {
    name,
    title: refs.presetTitle.value.trim(),
    pronoun: refs.presetPronoun.value || "TA",
  };
  state.presets = [preset, ...state.presets.filter((item) => item.name !== name)];
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
  state.presets = state.presets.filter((item) => item.name !== state.selectedPresetName);
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
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem(THEME_KEY, next);
  applyTheme(next);
}

function personNameSuggestions() {
  const ordered = [];
  [...state.presets.map((item) => item.name), ...SLOT_SUGGESTIONS.person_name].forEach((item) => {
    if (item && !ordered.includes(item)) ordered.push(item);
  });
  return ordered;
}

function applyPresetToRoleKey(key) {
  const input = state.formRefs[key];
  if (!input) return;
  const preset = state.presets.find((item) => item.name === input.value.trim());
  if (!preset) return;
  const base = key.replace(/__name$/, "");
  const titleRef = state.formRefs[`${base}__title`];
  const pronounRef = state.formRefs[`${base}__pronoun`];
  if (titleRef) titleRef.value = preset.title || "";
  if (pronounRef) pronounRef.value = preset.pronoun || "TA";
}

function handleGenerate() {
  try {
    const context = collectContext();
    const results = generateTexts(context);
    state.results = results;
    renderResults(results);
  } catch (error) {
    window.alert(error.message || String(error));
  }
}

function collectContext() {
  const schema = getCurrentSchema();
  const roles = {};
  const objects = {};

  [...schema.required_slots, ...schema.optional_slots].forEach((slot) => {
    if (slot.slot_type === "role") {
      roles[slot.key] = {
        name: valueOf(`${slot.key}__name`),
        title: valueOf(`${slot.key}__title`),
        pronoun: valueOf(`${slot.key}__pronoun`),
      };
    } else if (slot.slot_type === "object") {
      objects[slot.key] = valueOf(`${slot.key}__name`);
    }
  });

  return {
    carrier_type: refs.carrierSelect.value,
    event_id: schema.id,
    variant_count: Number(refs.variantSelect.value || 1),
    roles,
    objects,
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
  return state.formRefs[key]?.value?.trim?.() ?? "";
}

function checkedOf(key, fallback) {
  const ref = state.formRefs[key];
  return ref ? !!ref.checked : fallback;
}

function buildDateText() {
  const custom = valueOf("time_custom");
  if (custom) return custom;
  const year = valueOf("time_year");
  const quadrum = valueOf("time_quadrum");
  const day = valueOf("time_day");
  return year && quadrum && day ? `${year}年${quadrum}${day}日` : "";
}

function validateContext(context) {
  const schema = getCurrentSchema();
  if (!schema.carrier_types.includes(context.carrier_type)) {
    throw new Error(`载体类型“${context.carrier_type}”不适用于事件“${schema.label}”。`);
  }
  if (context.variant_count < 1 || context.variant_count > 5) {
    throw new Error("生成数量必须在 1 到 5 之间。");
  }
  schema.required_slots.forEach((slot) => {
    if (slot.slot_type === "role" && !context.roles?.[slot.key]?.name?.trim()) {
      throw new Error(`请填写必填角色：${slot.label}`);
    }
    if (slot.slot_type === "object" && !context.objects?.[slot.key]?.trim()) {
      throw new Error(`请填写必填对象：${slot.label}`);
    }
  });
  return schema;
}

function generateTexts(context) {
  const schema = validateContext(context);
  const count = Math.max(1, Math.min(5, Number(context.variant_count || 1)));
  const results = [];
  const seen = new Set();
  let attempts = 0;
  const maxAttempts = count * 30;

  while (results.length < count && attempts < maxAttempts) {
    attempts += 1;
    const text = generateSingleText(schema, context);
    const signature = dedupeSignature(text);
    if (seen.has(signature)) continue;
    seen.add(signature);
    results.push({ text, event_id: schema.id });
  }

  if (!results.length) throw new Error("未能生成可用文本，请检查输入内容。");
  return results;
}

function generateSingleText(schema, context) {
  const eventPack = TEXT_TEMPLATES.event_templates[schema.id];
  const carrierOpeners = TEXT_TEMPLATES.carrier_openers[context.carrier_type];
  const mapping = buildMapping(schema, context, eventPack);
  const mainImage = renderTemplate(pick(eventPack.main_images), mapping);
  const opening = renderTemplate(pick(carrierOpeners), { ...mapping, main_image: mainImage });
  const sentences = [ensureSentence(opening)];

  if (context.include_detail) {
    const detail = renderTemplate(context.detail_hint || pick(eventPack.detail_sentences || TEXT_TEMPLATES.default_detail_sentences), mapping);
    if (detail) sentences.push(ensureSentence(detail));
  }
  if (context.include_style) {
    const style = renderTemplate(context.style_hint || pick(eventPack.style_sentences || TEXT_TEMPLATES.default_style_sentences), mapping);
    if (style) sentences.push(ensureSentence(style));
  }
  if (mapping.title) {
    const titleSentence = renderTemplate(pick(TEXT_TEMPLATES.title_sentences), mapping);
    if (titleSentence) sentences.push(ensureSentence(titleSentence));
  }
  if (context.include_context) {
    const eventNoun = renderTemplate(pick(eventPack.event_nouns), mapping);
    const contextText = renderTemplate(pick(TEXT_TEMPLATES.context_sentences), { ...mapping, event_noun: eventNoun });
    if (contextText) sentences.push(ensureSentence(contextText));
  }
  return normalizeOutput(sentences.join(""));
}

function buildMapping(schema, context, eventPack) {
  const mapping = {};
  [...schema.required_slots, ...schema.optional_slots].forEach((slot) => {
    if (slot.slot_type === "role") {
      const role = context.roles?.[slot.key] || {};
      const name = (role.name || "").trim();
      const title = (role.title || "").trim();
      const pronoun = (role.pronoun || "").trim() || pick(SLOT_SUGGESTIONS.pronoun);
      mapping[`${slot.key}_name`] = name;
      mapping[`${slot.key}_display`] = title ? `${title}${name}` : name;
      mapping[`${slot.key}_pronoun`] = pronoun;
    } else if (slot.slot_type === "object") {
      mapping[`${slot.key}_name`] =
        (context.objects?.[slot.key] || "").trim() || pick(SLOT_SUGGESTIONS[slot.suggestion_type] || [""]);
    }
  });

  mapping.quality = (context.quality || "").trim() || pick(SLOT_SUGGESTIONS.quality || [""]);
  mapping.material = (context.material || "").trim();
  mapping.title = (context.title || "").trim();
  mapping.wound_verb = (context.wound_verb || "").trim() || pick(SLOT_SUGGESTIONS.wound_verb || ["击伤"]);
  mapping.date_text = (context.date_text || "").trim() || pick(SLOT_SUGGESTIONS.date_text || ["某年某象某日"]);
  mapping.scene_text = (context.scene_hint || "").trim() || pick(eventPack.scene_phrases || TEXT_TEMPLATES.default_scene_phrases);
  mapping.scene_fragment = mapping.scene_text ? `，${mapping.scene_text}` : "";

  mapping.thing_phrase = buildItemPhrase(mapping.thing_name || "", mapping.quality, mapping.material);
  mapping.object_phrase = buildItemPhrase(mapping.object_name || "", "", mapping.material);
  mapping.book_display = wrapBookTitle(mapping.book_name || "");
  mapping.weapon_name = mapping.weapon_name || pick(SLOT_SUGGESTIONS.weapon_name || [""]);
  mapping.weapon_phrase = mapping.weapon_name ? `一把${mapping.weapon_name}` : "一把武器";
  mapping.project_name = mapping.project_name || "";
  mapping.animal_name = mapping.animal_name || "";
  mapping.training_name = mapping.training_name || "";
  mapping.skill_name = mapping.skill_name || "";
  mapping.material_name = mapping.material_name || "";
  mapping.game_name = mapping.game_name || "";
  return mapping;
}

function pick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function renderTemplate(template, mapping) {
  return template.replace(/\{([^}]+)\}/g, (_, key) => mapping[key] ?? "");
}

function buildItemPhrase(name, quality = "", material = "") {
  name = name.trim();
  quality = quality.trim();
  material = material.trim();
  if (!name) return "一件作品";
  let materialPhrase = "";
  if (material) {
    const materialRoot = material.endsWith("制") ? material.slice(0, -1) : material;
    if (materialRoot && !name.includes(materialRoot)) {
      materialPhrase = material.endsWith("制") ? material : `${material}制`;
    }
  }
  if (quality && materialPhrase) return `${quality}品质的${materialPhrase}${name}`;
  if (quality) return `${quality}品质的${name}`;
  if (materialPhrase) return `${materialPhrase}${name}`;
  return name;
}

function wrapBookTitle(name) {
  name = name.trim();
  if (!name) return "《无题之书》";
  if (name.startsWith("《") && name.endsWith("》")) return name;
  return `《${name}》`;
}

function ensureSentence(text) {
  const cleaned = text.trim();
  if (!cleaned) return "";
  return "。！？".includes(cleaned.slice(-1)) ? cleaned : `${cleaned}。`;
}

function normalizeOutput(text) {
  return text
    .replace(/\s+/g, "")
    .replace(/，。/g, "。")
    .replace(/。。+/g, "。")
    .replace(/，，+/g, "，")
    .replace(/([，。！？])\1+/g, "$1")
    .replace(/([，。！？])([，。！？])/g, (match) => (match.includes("。") ? "。" : match[0]))
    .replace(/^，+|，+$/g, "");
}

function dedupeSignature(text) {
  return text.replace(/[，。！？；：“”《》、\s]/g, "");
}

function renderResults(results) {
  refs.resultsContainer.innerHTML = "";
  if (!results.length) {
    refs.resultsContainer.appendChild(createPlaceholder("右侧将显示 1–5 条中文艺术文本候选。填写中间表单后点击“生成”即可。"));
    return;
  }
  results.forEach((result, index) => {
    const card = document.createElement("article");
    card.className = "result-card";
    card.innerHTML = `
      <h3>候选 ${index + 1}</h3>
      <textarea readonly>${result.text}</textarea>
      <div class="button-row">
        <button type="button" class="ghost">复制此条</button>
      </div>
    `;
    card.querySelector("button").addEventListener("click", () => copyText(result.text));
    refs.resultsContainer.appendChild(card);
  });
}

function createPlaceholder(text) {
  const box = document.createElement("div");
  box.className = "placeholder";
  box.textContent = text;
  return box;
}

function clearForm() {
  Object.entries(state.formRefs).forEach(([key, ref]) => {
    if (ref instanceof HTMLInputElement && ref.type === "checkbox") {
      ref.checked = true;
    } else {
      ref.value = "";
    }
  });
  if (state.formRefs.time_year) state.formRefs.time_year.value = "5500";
  if (state.formRefs.time_quadrum) state.formRefs.time_quadrum.value = "翠象";
  if (state.formRefs.time_day) state.formRefs.time_day.value = "1";
  state.results = [];
  renderResults([]);
}

function copyText(text) {
  navigator.clipboard.writeText(text).then(
    () => window.alert("文本已复制到剪贴板。"),
    () => window.alert("复制失败，请手动复制。")
  );
}

function copyAllResults() {
  if (!state.results.length) {
    window.alert("请先生成文本。");
    return;
  }
  const merged = state.results.map((item, index) => `[候选 ${index + 1}]\n${item.text}`).join("\n\n");
  copyText(merged);
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
