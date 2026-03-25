;(function (global) {
  var COOKIE_DAYS = 365;
  var COOKIE_LIMIT = 3500;
  var STORAGE_PREFIX = "tynan_local_";
  var KEYS = {
    presets: "tynan_art_presets",
    customEvents: "tynan_art_custom_events",
    theme: "tynan_art_theme",
  };

  function getLocalStorage() {
    try {
      return global.localStorage || null;
    } catch (_error) {
      return null;
    }
  }

  function getStorageKey(name) {
    return STORAGE_PREFIX + name;
  }

  function setLocal(name, value) {
    var storage = getLocalStorage();
    if (!storage) return false;
    try {
      storage.setItem(getStorageKey(name), value);
      return true;
    } catch (_error) {
      return false;
    }
  }

  function getLocal(name) {
    var storage = getLocalStorage();
    if (!storage) return "";
    try {
      return storage.getItem(getStorageKey(name)) || "";
    } catch (_error) {
      return "";
    }
  }

  function removeLocal(name) {
    var storage = getLocalStorage();
    if (!storage) return;
    try {
      storage.removeItem(getStorageKey(name));
    } catch (_error) {}
  }

  function setCookie(name, value, days) {
    var expires = new Date(Date.now() + (days || COOKIE_DAYS) * 86400000).toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + "; expires=" + expires + "; path=/; SameSite=Lax";
  }

  function getCookie(name) {
    var prefix = name + "=";
    var parts = document.cookie ? document.cookie.split("; ") : [];
    for (var i = 0; i < parts.length; i += 1) {
      if (parts[i].indexOf(prefix) === 0) {
        return decodeURIComponent(parts[i].slice(prefix.length));
      }
    }
    return "";
  }

  function removeCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax";
  }

  function loadJson(name, fallback) {
    try {
      var raw = getLocal(name) || getCookie(name);
      if (raw && !getLocal(name)) setLocal(name, raw);
      return raw ? JSON.parse(raw) : fallback;
    } catch (_error) {
      return fallback;
    }
  }

  function saveJson(name, value) {
    var payload = JSON.stringify(value || []);
    var savedLocal = setLocal(name, payload);
    if (!savedLocal && encodeURIComponent(payload).length > COOKIE_LIMIT) {
      throw new Error("保存失败：内容过大，且当前环境无法使用本地存储。");
    }
    if (encodeURIComponent(payload).length <= COOKIE_LIMIT) {
      setCookie(name, payload, COOKIE_DAYS);
    } else {
      removeCookie(name);
    }
  }

  function loadPresets() {
    return loadJson(KEYS.presets, []);
  }

  function savePresets(items) {
    saveJson(KEYS.presets, items || []);
  }

  function loadCustomEvents() {
    return loadJson(KEYS.customEvents, []);
  }

  function saveCustomEvents(items) {
    saveJson(KEYS.customEvents, items || []);
  }

  function loadTheme() {
    var theme = getLocal(KEYS.theme) || getCookie(KEYS.theme) || "light";
    if (theme && !getLocal(KEYS.theme)) setLocal(KEYS.theme, theme);
    return theme;
  }

  function saveTheme(theme) {
    var value = theme || "light";
    setLocal(KEYS.theme, value);
    setCookie(KEYS.theme, value, COOKIE_DAYS);
  }

  function clearAll() {
    removeCookie(KEYS.presets);
    removeCookie(KEYS.customEvents);
    removeCookie(KEYS.theme);
    removeLocal(KEYS.presets);
    removeLocal(KEYS.customEvents);
    removeLocal(KEYS.theme);
  }

  global.TynanStorage = {
    keys: KEYS,
    loadPresets: loadPresets,
    savePresets: savePresets,
    loadCustomEvents: loadCustomEvents,
    saveCustomEvents: saveCustomEvents,
    loadTheme: loadTheme,
    saveTheme: saveTheme,
    clearAll: clearAll,
  };
})(window);
