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
      title: "载体开头句",
      summary: "先根据载体选择开头句。",
      detail: "雕塑、家具、近战武器、远程武器、石棺饰板各自有不同的开头句池，用来决定文本第一句的整体口吻。",
    },
    {
      title: "主体画面",
      summary: "用 main_images 决定“谁在做什么”。",
      detail: "这里通常会引用角色变量、对象变量和 scene_fragment，是整段艺术文本中最核心的句式池。",
    },
    {
      title: "细节补句",
      summary: "用 detail_sentences 描写动作外的细节。",
      detail: "常用于补充背景、器物位置、动作夸张方式、构图压缩感等，让文本更接近游戏内风格。",
    },
    {
      title: "风格/寓意句",
      summary: "用 style_sentences 解释整体气质。",
      detail: "这部分往往更抽象，会描述作品给人的压迫感、庄严感、哀伤感、滑稽感等。",
    },
    {
      title: "背景收束句",
      summary: "用 event_nouns + context_sentences 把事件落到时间线上。",
      detail: "也就是“这件作品讲述了……发生在……”这一类句式，让作品像是在回顾一件已发生之事。",
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
      ["开头句：carrier_openers", "主画面：main_images", "细节句：detail_sentences", "风格句：style_sentences", "背景句：event_nouns"]
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
      "<li><code>{pawn_display}</code> / <code>{victim_display}</code> 由“称呼 + 姓名”自动展开。</li>" +
      "<li><code>{scene_fragment}</code> 会自动加上逗号前缀，方便拼到主画面句尾。</li>" +
      "<li><code>{event_noun}</code> 专门服务于背景句，用来概括“这件作品讲述了什么”。</li>" +
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
    box.appendChild(templateList("event_nouns 背景叙述", template.event_nouns, true));
    box.appendChild(templateList("main_images 主画面", template.main_images, true));
    box.appendChild(templateList("detail_sentences 细节句", template.detail_sentences, false));
    box.appendChild(templateList("style_sentences 风格/寓意句", template.style_sentences, false));
    box.appendChild(templateList("scene_phrases 场景短语", template.scene_phrases, false));
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
