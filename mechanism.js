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
    window.addEventListener("tynan-favorites-updated", function () {
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
    var items = TynanCatalog.getAllEvents().filter(function (item) {
      return !query || item.label.toLowerCase().indexOf(query) !== -1 || item.id.toLowerCase().indexOf(query) !== -1;
    });

    var hasSelected = false;
    TynanGeneratorPage.getEventSections(items).forEach(function (sectionInfo) {
      var section = document.createElement("section");
      section.className = "event-group";
      section.innerHTML = '<h3 class="event-group-title">' + esc(sectionInfo.title) + "</h3>";
      sectionInfo.items.forEach(function (item) {
        if (item.id === state.eventId) hasSelected = true;
        section.appendChild(
          TynanGeneratorPage.createEventEntry(item, item.id === state.eventId, function () {
            state.eventId = item.id;
            renderEventList();
            renderDetails();
          })
        );
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
