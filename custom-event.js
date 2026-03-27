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
    global.addEventListener("tynan-favorites-updated", function () {
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
    var items = data.EVENT_SCHEMAS.filter(function (item) {
      return !query || item.label.toLowerCase().indexOf(query) !== -1 || item.id.toLowerCase().indexOf(query) !== -1;
    });
    TynanGeneratorPage.getEventSections(items).forEach(function (sectionInfo) {
      var section = document.createElement("section");
      section.className = "event-group";
      section.innerHTML = '<h3 class="event-group-title">' + esc(sectionInfo.title) + "</h3>";
      sectionInfo.items.forEach(function (item) {
        section.appendChild(
          TynanGeneratorPage.createEventEntry(item, false, function () {
          state.selectedId = "";
          loadEditor(TynanCatalog.cloneFromBaseEvent(item.id));
          closeCloneModal();
          renderCustomList();
          renderPreview();
          })
        );
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
