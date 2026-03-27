// ===== tutorial.js =====
;(function (global) {
  var refs = {
    openBtn: document.querySelector('#openTutorialBtn'),
    overlay: document.querySelector('#tutorialOverlay'),
    spotlight: document.querySelector('#tutorialSpotlight'),
    card: document.querySelector('#tutorialCard'),
    stepLabel: document.querySelector('#tutorialStepLabel'),
    dots: document.querySelector('#tutorialDots'),
    title: document.querySelector('#tutorialTitle'),
    text: document.querySelector('#tutorialText'),
    dontRemind: document.querySelector('#tutorialDontRemind'),
    reenableBtn: document.querySelector('#reenableTutorialBtn'),
    prevBtn: document.querySelector('#prevTutorialBtn'),
    nextBtn: document.querySelector('#nextTutorialBtn'),
    skipBtn: document.querySelector('#skipTutorialBtn'),
  };

  var steps = [
    {
      view: 'generator',
      target: '#openPresetBtn',
      title: '添加预设人物',
      text: '这里可以打开人物预设面板。你可以保存常用人物，并把其中一个设为“默认主体人物”，之后生成器会优先自动填入主体角色。',
    },
    {
      view: 'generator',
      target: '#openFavoriteManagerBtn',
      title: '管理事件收藏',
      text: '事件列表右侧的星标可以快速收藏事件；也可以点这里打开收藏管理面板，批量整理收藏并调整收藏顺序。',
    },
    {
      view: 'generator',
      target: '#formContainer',
      title: '填写信息并生成事件',
      text: '先在左侧选择事件，再在这里填写角色、对象、时间等信息。填写完成后，使用下方“生成”按钮即可得到候选文本。',
    },
    {
      view: 'custom',
      target: '#newCustomEventBtn',
      title: '自定义简单事件',
      text: '切换到“自定义事件”页后，从这里新建模板。简单事件通常只需要填标题、角色 / 对象，以及至少一条主画面句，再保存即可。',
    },
  ];

  var state = {
    index: 0,
    open: false,
  };

  init();

  function init() {
    if (!refs.openBtn || !refs.overlay) return;
    refs.openBtn.addEventListener('click', function () {
      openTutorial(true);
    });
    refs.prevBtn.addEventListener('click', prevStep);
    refs.nextBtn.addEventListener('click', nextStep);
    refs.skipBtn.addEventListener('click', function () {
      finishTutorial('skipped');
    });
    refs.reenableBtn.addEventListener('click', function () {
      TynanStorage.saveTutorialState('show_again');
      refs.reenableBtn.textContent = '下次将再次显示';
    });
    global.addEventListener('resize', repositionTutorial);
    global.addEventListener('scroll', repositionTutorial, true);

    var tutorialState = TynanStorage.loadTutorialState();
    renderDots();
    if (tutorialState === 'show_again') {
      global.setTimeout(function () {
        openTutorial(false);
      }, 420);
    } else if (!tutorialState) {
      if (TynanStorage.hasExistingUserData()) {
        TynanStorage.saveTutorialState('legacy_hidden');
      } else {
        global.setTimeout(function () {
          openTutorial(false);
        }, 420);
      }
    }
  }

  function openTutorial(manual) {
    state.open = true;
    state.index = 0;
    refs.overlay.classList.remove('hidden');
    refs.overlay.setAttribute('aria-hidden', 'false');
    refs.dontRemind.checked = TynanStorage.loadTutorialState() !== 'show_again';
    refs.reenableBtn.textContent = '重新启用教程';
    if (manual) {
      refs.skipBtn.textContent = '关闭教程';
    } else {
      refs.skipBtn.textContent = '跳过教程';
    }
    applyStep();
  }

  function closeTutorial() {
    state.open = false;
    refs.overlay.classList.add('hidden');
    refs.overlay.setAttribute('aria-hidden', 'true');
  }

  function finishTutorial(result) {
    var value = refs.dontRemind && refs.dontRemind.checked ? (result || 'done') : 'show_again';
    TynanStorage.saveTutorialState(value);
    closeTutorial();
  }

  function prevStep() {
    if (state.index <= 0) return;
    state.index -= 1;
    applyStep();
  }

  function nextStep() {
    if (state.index >= steps.length - 1) {
      finishTutorial('done');
      return;
    }
    state.index += 1;
    applyStep();
  }

  function applyStep() {
    var step = steps[state.index];
    if (global.TynanGeneratorPage && global.TynanGeneratorPage.switchView && step.view) {
      global.TynanGeneratorPage.switchView(step.view);
    }
    refs.stepLabel.textContent = '步骤 ' + (state.index + 1) + ' / ' + steps.length;
    renderDots();
    refs.title.textContent = step.title;
    refs.text.textContent = step.text;
    refs.prevBtn.disabled = state.index === 0;
    refs.nextBtn.textContent = state.index === steps.length - 1 ? '完成' : '下一步';
    global.setTimeout(repositionTutorial, 120);
  }

  function repositionTutorial() {
    if (!state.open) return;
    var step = steps[state.index];
    var target = document.querySelector(step.target);
    if (!target) {
      centerTutorialCard();
      return;
    }
    target.scrollIntoView({ block: 'center', inline: 'center', behavior: 'smooth' });
    global.setTimeout(function () {
      var rect = target.getBoundingClientRect();
      placeSpotlight(rect);
      placeCard(rect);
    }, 90);
  }

  function placeSpotlight(rect) {
    var padding = 8;
    refs.spotlight.style.top = Math.max(8, rect.top - padding) + 'px';
    refs.spotlight.style.left = Math.max(8, rect.left - padding) + 'px';
    refs.spotlight.style.width = Math.min(global.innerWidth - 16, rect.width + padding * 2) + 'px';
    refs.spotlight.style.height = Math.min(global.innerHeight - 16, rect.height + padding * 2) + 'px';
  }

  function placeCard(rect) {
    var cardWidth = Math.min(360, global.innerWidth - 24);
    var left = Math.min(global.innerWidth - cardWidth - 12, Math.max(12, rect.left));
    var belowTop = rect.bottom + 14;
    var aboveTop = rect.top - refs.card.offsetHeight - 14;
    var top = belowTop;

    if (belowTop + refs.card.offsetHeight > global.innerHeight - 12 && aboveTop > 12) {
      top = aboveTop;
    }
    if (top + refs.card.offsetHeight > global.innerHeight - 12) {
      top = global.innerHeight - refs.card.offsetHeight - 12;
    }
    if (top < 12) top = 12;

    if (global.matchMedia && global.matchMedia('(orientation: portrait)').matches) {
      left = 10;
      top = Math.min(global.innerHeight - refs.card.offsetHeight - 10, rect.bottom + 12);
      if (top < 12) top = 12;
    }

    refs.card.style.left = left + 'px';
    refs.card.style.top = top + 'px';
  }

  function centerTutorialCard() {
    refs.spotlight.style.top = '50%';
    refs.spotlight.style.left = '50%';
    refs.spotlight.style.width = '0px';
    refs.spotlight.style.height = '0px';
    refs.card.style.left = Math.max(12, (global.innerWidth - refs.card.offsetWidth) / 2) + 'px';
    refs.card.style.top = Math.max(12, (global.innerHeight - refs.card.offsetHeight) / 2) + 'px';
  }

  function renderDots() {
    if (!refs.dots) return;
    refs.dots.innerHTML = '';
    steps.forEach(function (step, index) {
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'tutorial-dot' + (index === state.index ? ' active' : '');
      button.setAttribute('aria-label', '跳到步骤 ' + (index + 1) + '：' + step.title);
      button.title = step.title;
      button.textContent = index + 1;
      button.addEventListener('click', function () {
        state.index = index;
        applyStep();
      });
      refs.dots.appendChild(button);
    });
  }
})(window);
