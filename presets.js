// ===== presets.js =====
;(function (global) {
  function createPresetsApi(deps) {
    var refs = deps.refs;
    var state = deps.state;
    var storage = deps.storage;
    var createPlaceholder = deps.createPlaceholder;
    var renderForm = deps.renderForm;
    var personSuggestions = deps.personSuggestions || [];
    var uniq = deps.uniq;
    var globalObject = deps.globalObject || global;

    function getAutoPrimaryPreset() {
      return state.presets.find(function (item) {
        return !!item.autoPrimary;
      });
    }

    function getPrimaryRoleSlot(schema) {
      var requiredRole = schema.required_slots.find(function (slot) {
        return slot.slot_type === "role";
      });
      if (requiredRole) return requiredRole;
      return schema.optional_slots.find(function (slot) {
        return slot.slot_type === "role";
      });
    }

    function applyAutoPrimaryPreset(schema) {
      var preset = getAutoPrimaryPreset();
      var slot = preset && getPrimaryRoleSlot(schema);
      if (!preset || !slot) return;
      var nameKey = slot.key + "__name";
      var titleKey = slot.key + "__title";
      var pronounKey = slot.key + "__pronoun";
      if (!state.formRefs[nameKey] || state.formRefs[nameKey].value.trim()) return;
      state.formRefs[nameKey].value = preset.name || "";
      if (state.formRefs[titleKey]) state.formRefs[titleKey].value = preset.title || "";
      if (state.formRefs[pronounKey]) state.formRefs[pronounKey].value = preset.pronoun || "TA";
    }

    function openPresetModal() {
      refs.presetModal.classList.remove("hidden");
      refs.presetModal.setAttribute("aria-hidden", "false");
      if (!state.selectedPresetName) refs.presetAutoPrimary.checked = false;
    }

    function closePresetModal() {
      refs.presetModal.classList.add("hidden");
      refs.presetModal.setAttribute("aria-hidden", "true");
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
          esc(preset.name) +
          '</strong><div class="preset-meta">' +
          esc(preset.title || "未填写称呼") +
          " / " +
          esc(preset.pronoun || "TA") +
          (preset.autoPrimary ? ' / <span class="preset-badge">默认主体</span>' : "") +
          "</div></div>";
        item.addEventListener("click", function () {
          state.selectedPresetName = preset.name;
          refs.presetName.value = preset.name;
          refs.presetTitle.value = preset.title || "";
          refs.presetPronoun.value = preset.pronoun || "TA";
          refs.presetAutoPrimary.checked = !!preset.autoPrimary;
          renderPresetList();
        });
        refs.presetList.appendChild(item);
      });
    }

    function savePreset() {
      var name = refs.presetName.value.trim();
      if (!name) return globalObject.alert("请先填写预设人物姓名。");
      var autoPrimary = !!refs.presetAutoPrimary.checked;
      state.presets = [
        { name: name, title: refs.presetTitle.value.trim(), pronoun: refs.presetPronoun.value || "TA", autoPrimary: autoPrimary },
      ]
        .concat(
          state.presets.filter(function (item) {
            return item.name !== name;
          })
        )
        .map(function (item) {
          if (!autoPrimary || item.name === name) return item;
          return { name: item.name, title: item.title || "", pronoun: item.pronoun || "TA", autoPrimary: false };
        });
      storage.savePresets(state.presets);
      state.selectedPresetName = name;
      renderPresetList();
      renderForm();
      globalObject.dispatchEvent(new Event("tynan-presets-updated"));
    }

    function deletePreset() {
      if (!state.selectedPresetName) return globalObject.alert("请先选中要删除的人物预设。");
      state.presets = state.presets.filter(function (item) {
        return item.name !== state.selectedPresetName;
      });
      storage.savePresets(state.presets);
      clearPresetInputs();
      renderForm();
      globalObject.dispatchEvent(new Event("tynan-presets-updated"));
    }

    function clearPresetInputs() {
      state.selectedPresetName = "";
      refs.presetName.value = "";
      refs.presetTitle.value = "";
      refs.presetPronoun.value = "TA";
      refs.presetAutoPrimary.checked = false;
      renderPresetList();
    }

    function mergedPresetNames() {
      return uniq(
        state.presets
          .map(function (item) {
            return item.name;
          })
          .concat(personSuggestions)
      );
    }

    function applyPreset(key) {
      var ref = state.formRefs[key];
      if (!ref) return;
      var preset = state.presets.find(function (item) {
        return item.name === ref.value.trim();
      });
      if (!preset) return;
      var base = key.replace(/__name$/, "");
      if (state.formRefs[base + "__title"]) state.formRefs[base + "__title"].value = preset.title || "";
      if (state.formRefs[base + "__pronoun"]) state.formRefs[base + "__pronoun"].value = preset.pronoun || "TA";
    }

    function esc(text) {
      return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;");
    }

    return {
      getAutoPrimaryPreset: getAutoPrimaryPreset,
      getPrimaryRoleSlot: getPrimaryRoleSlot,
      applyAutoPrimaryPreset: applyAutoPrimaryPreset,
      openPresetModal: openPresetModal,
      closePresetModal: closePresetModal,
      renderPresetList: renderPresetList,
      savePreset: savePreset,
      deletePreset: deletePreset,
      clearPresetInputs: clearPresetInputs,
      mergedPresetNames: mergedPresetNames,
      applyPreset: applyPreset,
    };
  }

  global.TynanPresets = {
    createPresetsApi: createPresetsApi,
  };
})(window);
