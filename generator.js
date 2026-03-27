// ===== generator.js =====
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
    presetAutoPrimary: document.querySelector("#presetAutoPrimary"),
    roleTitleList: document.querySelector("#roleTitleList"),
    carrierSelect: document.querySelector("#carrierSelect"),
    variantSelect: document.querySelector("#variantSelect"),
    showEnglishToggle: document.querySelector("#showEnglishToggle"),
    eventSearch: document.querySelector("#eventSearch"),
    eventList: document.querySelector("#eventList"),
    favoriteManagerTriggers: document.querySelectorAll("[data-open-favorite-manager]"),
    favoriteManagerModal: document.querySelector("#favoriteManagerModal"),
    closeFavoriteManagerBtn: document.querySelector("#closeFavoriteManagerBtn"),
    favoriteManagerSearch: document.querySelector("#favoriteManagerSearch"),
    favoriteManagerList: document.querySelector("#favoriteManagerList"),
    favoriteSelectVisibleBtn: document.querySelector("#favoriteSelectVisibleBtn"),
    favoriteClearVisibleBtn: document.querySelector("#favoriteClearVisibleBtn"),
    favoriteClearAllBtn: document.querySelector("#favoriteClearAllBtn"),
    objectPickerModal: document.querySelector("#objectPickerModal"),
    objectPickerTitle: document.querySelector("#objectPickerTitle"),
    objectPickerSearch: document.querySelector("#objectPickerSearch"),
    objectPickerQuick: document.querySelector("#objectPickerQuick"),
    objectPickerList: document.querySelector("#objectPickerList"),
    closeObjectPickerBtn: document.querySelector("#closeObjectPickerBtn"),
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
    favoriteEventIds: [],
    mode: "simple",
    eventId: "",
    carrier: "",
    showEnglishReference: false,
    formRefs: {},
    suggestRefs: {},
    results: [],
    themeAnimating: false,
    objectPicker: { key: "", schemaId: "", slotKey: "", config: null },
  };

  var favoritesApi = global.TynanFavorites.createFavoritesApi({
    refs: refs,
    state: state,
    storage: TynanStorage,
    catalog: TynanCatalog,
    createPlaceholder: createPlaceholder,
    showToast: showToast,
    buildGroupedEvents: buildGroupedEvents,
    esc: esc,
    globalObject: global,
  });
  var normalizeFavoriteIds = favoritesApi.normalizeFavoriteIds;
  var persistFavorites = favoritesApi.persistFavorites;
  var isFavoriteEvent = favoritesApi.isFavoriteEvent;
  var toggleFavoriteEvent = favoritesApi.toggleFavoriteEvent;
  var openFavoriteManager = favoritesApi.openFavoriteManager;
  var closeFavoriteManager = favoritesApi.closeFavoriteManager;
  var getFavoriteManagerItems = favoritesApi.getFavoriteManagerItems;
  var renderFavoriteManagerList = favoritesApi.renderFavoriteManagerList;
  var setVisibleFavorites = favoritesApi.setVisibleFavorites;
  var getEventSections = favoritesApi.getEventSections;
  var createEventEntry = favoritesApi.createEventEntry;

  var presetsApi = global.TynanPresets.createPresetsApi({
    refs: refs,
    state: state,
    storage: TynanStorage,
    createPlaceholder: createPlaceholder,
    renderForm: function () {
      renderForm();
    },
    personSuggestions: data.SLOT_SUGGESTIONS.person_name,
    uniq: uniq,
    globalObject: global,
  });
  var getAutoPrimaryPreset = presetsApi.getAutoPrimaryPreset;
  var getPrimaryRoleSlot = presetsApi.getPrimaryRoleSlot;
  var applyAutoPrimaryPreset = presetsApi.applyAutoPrimaryPreset;
  var openPresetModal = presetsApi.openPresetModal;
  var closePresetModal = presetsApi.closePresetModal;
  var renderPresetList = presetsApi.renderPresetList;
  var savePreset = presetsApi.savePreset;
  var deletePreset = presetsApi.deletePreset;
  var clearPresetInputs = presetsApi.clearPresetInputs;
  var mergedPresetNames = presetsApi.mergedPresetNames;
  var applyPreset = presetsApi.applyPreset;

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
    state.favoriteEventIds = normalizeFavoriteIds(TynanStorage.loadFavoriteEvents());

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
      if (event.key === "Escape" && !refs.favoriteManagerModal.classList.contains("hidden")) {
        closeFavoriteManager();
      }
      if (event.key === "Escape" && !refs.objectPickerModal.classList.contains("hidden")) {
        closeObjectPicker();
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
    Array.prototype.forEach.call(refs.favoriteManagerTriggers, function (button) {
      button.addEventListener("click", openFavoriteManager);
    });
    refs.closeFavoriteManagerBtn.addEventListener("click", closeFavoriteManager);
    refs.favoriteManagerModal.addEventListener("click", function (event) {
      if (event.target === refs.favoriteManagerModal) closeFavoriteManager();
    });
    refs.favoriteManagerSearch.addEventListener("input", renderFavoriteManagerList);
    refs.favoriteSelectVisibleBtn.addEventListener("click", function () {
      setVisibleFavorites(true);
    });
    refs.favoriteClearVisibleBtn.addEventListener("click", function () {
      setVisibleFavorites(false);
    });
    refs.favoriteClearAllBtn.addEventListener("click", function () {
      if (!global.confirm("确定要清空全部收藏事件吗？")) return;
      state.favoriteEventIds = [];
      persistFavorites();
    });
    refs.closeObjectPickerBtn.addEventListener("click", closeObjectPicker);
    refs.objectPickerModal.addEventListener("click", function (event) {
      if (event.target === refs.objectPickerModal) closeObjectPicker();
    });
    refs.objectPickerSearch.addEventListener("input", renderObjectPickerList);

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
      state.favoriteEventIds = normalizeFavoriteIds(state.favoriteEventIds);
      TynanStorage.saveFavoriteEvents(state.favoriteEventIds);
      ensureActiveEventExists();
      renderEventList();
      renderFavoriteManagerList();
      renderForm();
    });
    global.addEventListener("tynan-favorites-updated", function () {
      state.favoriteEventIds = normalizeFavoriteIds(TynanStorage.loadFavoriteEvents());
      renderEventList();
      renderFavoriteManagerList();
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
    if (!global.confirm("这会清空人物预设、自定义事件、事件收藏和主题设置，是否继续？")) return;
    TynanStorage.clearAll();
    global.location.reload();
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

    getEventSections(filtered).forEach(function (sectionInfo) {
      var section = document.createElement("section");
      section.className = "event-group";
      section.innerHTML = '<h3 class="event-group-title">' + esc(sectionInfo.title) + "</h3>";
      sectionInfo.items.forEach(function (item) {
        section.appendChild(
          createEventEntry(item, item.id === state.eventId, function () {
          state.eventId = item.id;
          state.carrier = item.carrier_types[0];
          renderEventList();
          renderForm();
          })
        );
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
    applyAutoPrimaryPreset(schema);
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
      section.grid.appendChild(createObjectField(schema, slot));
    });
    return section.node;
  }

  function createObjectField(schema, slot) {
    var key = slot.key + "__name";
    var suggestions = data.SLOT_SUGGESTIONS[slot.suggestion_type] || [];
    var pickerConfig = getObjectPickerConfig(schema, slot);
    var wrapper = document.createElement("div");
    wrapper.className = "object-field-card";
    wrapper.appendChild(suggestField(slot.label, key, suggestions, buildObjectPlaceholder(slot, pickerConfig, suggestions)));

    if (pickerConfig && pickerConfig.quick && pickerConfig.quick.length) {
      var quickRow = document.createElement("div");
      quickRow.className = "object-quick-row";
      pickerConfig.quick.slice(0, 5).forEach(function (item) {
        var chip = document.createElement("button");
        chip.type = "button";
        chip.className = "object-quick-chip";
        chip.textContent = item;
        chip.addEventListener("click", function () {
          state.formRefs[key].value = item;
        });
        quickRow.appendChild(chip);
      });
      wrapper.appendChild(quickRow);
    }

    if (pickerConfig && pickerConfig.all && pickerConfig.all.length) {
      var actionRow = document.createElement("div");
      actionRow.className = "object-picker-actions";
      var button = document.createElement("button");
      button.type = "button";
      button.className = "ghost mini-button";
      button.textContent = "打开选择器";
      button.addEventListener("click", function () {
        openObjectPicker(schema, slot, key);
      });
      actionRow.appendChild(button);
      wrapper.appendChild(actionRow);
    }

    return wrapper;
  }

  function getObjectPickerConfig(schema, slot) {
    var pickers = data.TEXT_TEMPLATES.object_picker_options || {};
    var specific = pickers[schema.id + ":" + slot.key];
    if (specific) return specific;
    var suggestions = data.SLOT_SUGGESTIONS[slot.suggestion_type] || [];
    if (suggestions.length >= 8) {
      return {
        title: "选择" + slot.label,
        quick: suggestions.slice(0, 5),
        all: suggestions.slice(),
      };
    }
    return null;
  }

  function buildObjectPlaceholder(slot, pickerConfig, suggestions) {
    var source = (pickerConfig && pickerConfig.quick && pickerConfig.quick.length ? pickerConfig.quick : suggestions) || [];
    var example = source[0] || slot.label;
    return "例如：" + example;
  }

  function timeSection() {
    var section = createSection("作品时间", "可直接选年份/象季/日期，也可用自定义时间整句覆盖。", true);
    section.grid.appendChild(selectField("年份", "time_year", data.SLOT_SUGGESTIONS.time_year, "5500"));
    section.grid.appendChild(selectField("象季", "time_quadrum", data.SLOT_SUGGESTIONS.time_quadrum, "翠象"));
    section.grid.appendChild(selectField("日期", "time_day", data.SLOT_SUGGESTIONS.time_day, "1"));
    section.grid.appendChild(
      suggestField("自定义时间（优先）", "time_custom", data.SLOT_SUGGESTIONS.date_text, "例如：5501年赫象7日")
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

  function openObjectPicker(schema, slot, key) {
    state.objectPicker = {
      key: key,
      schemaId: schema.id,
      slotKey: slot.key,
      config: getObjectPickerConfig(schema, slot),
    };
    if (!state.objectPicker.config) return;
    refs.objectPickerTitle.textContent = state.objectPicker.config.title || ("选择" + slot.label);
    refs.objectPickerSearch.value = "";
    refs.objectPickerModal.classList.remove("hidden");
    refs.objectPickerModal.setAttribute("aria-hidden", "false");
    renderObjectPickerList();
  }

  function closeObjectPicker() {
    refs.objectPickerModal.classList.add("hidden");
    refs.objectPickerModal.setAttribute("aria-hidden", "true");
    state.objectPicker = { key: "", schemaId: "", slotKey: "", config: null };
  }

  function renderObjectPickerList() {
    var picker = state.objectPicker.config;
    if (!picker) return;
    var query = refs.objectPickerSearch.value.trim().toLowerCase();
    var all = (picker.all || []).filter(function (item) {
      return !query || item.toLowerCase().indexOf(query) !== -1;
    });

    refs.objectPickerQuick.innerHTML = "";
    (picker.quick || []).forEach(function (item) {
      var chip = document.createElement("button");
      chip.type = "button";
      chip.className = "object-quick-chip";
      chip.textContent = item;
      chip.addEventListener("click", function () {
        applyObjectPickerValue(item);
      });
      refs.objectPickerQuick.appendChild(chip);
    });

    refs.objectPickerList.innerHTML = "";
    if (!all.length) {
      refs.objectPickerList.appendChild(createPlaceholder("没有匹配的条目。"));
      return;
    }
    var grid = document.createElement("div");
    grid.className = "object-picker-grid";
    all.forEach(function (item) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "object-picker-item";
      button.textContent = item;
      button.addEventListener("click", function () {
        applyObjectPickerValue(item);
      });
      grid.appendChild(button);
    });
    refs.objectPickerList.appendChild(grid);
  }

  function applyObjectPickerValue(value) {
    if (state.objectPicker.key && state.formRefs[state.objectPicker.key]) {
      state.formRefs[state.objectPicker.key].value = value;
    }
    closeObjectPicker();
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
    getEventSections: getEventSections,
    createEventEntry: createEventEntry,
    isFavoriteEvent: isFavoriteEvent,
    showToast: showToast,
  };
})(window);
