// ===== favorites.js =====
;(function (global) {
  function createFavoritesApi(deps) {
    var refs = deps.refs;
    var state = deps.state;
    var storage = deps.storage;
    var catalog = deps.catalog;
    var createPlaceholder = deps.createPlaceholder;
    var showToast = deps.showToast;
    var buildGroupedEvents = deps.buildGroupedEvents;
    var esc = deps.esc;
    var globalObject = deps.globalObject || global;
    var dragState = {
      draggingId: "",
      overId: "",
      insertAfter: false,
      placeholderEl: null,
    };

    function uniq(items) {
      var out = [];
      (items || []).forEach(function (item) {
        if (item && out.indexOf(item) === -1) out.push(item);
      });
      return out;
    }

    function normalizeFavoriteIds(items) {
      var eventMap = catalog.getEventMap();
      return uniq(items || []).filter(function (id) {
        return !!eventMap[id];
      });
    }

    function persistFavorites() {
      state.favoriteEventIds = normalizeFavoriteIds(state.favoriteEventIds);
      storage.saveFavoriteEvents(state.favoriteEventIds);
      globalObject.dispatchEvent(new Event("tynan-favorites-updated"));
    }

    function isFavoriteEvent(eventId) {
      return state.favoriteEventIds.indexOf(eventId) !== -1;
    }

    function toggleFavoriteEvent(eventId) {
      if (!eventId) return;
      if (isFavoriteEvent(eventId)) {
        state.favoriteEventIds = state.favoriteEventIds.filter(function (id) {
          return id !== eventId;
        });
        showToast("已取消收藏事件。");
      } else {
        state.favoriteEventIds = [eventId].concat(
          state.favoriteEventIds.filter(function (id) {
            return id !== eventId;
          })
        );
        showToast("已收藏事件并置顶。", "success");
      }
      persistFavorites();
    }

    function openFavoriteManager() {
      refs.favoriteManagerModal.classList.remove("hidden");
      refs.favoriteManagerModal.setAttribute("aria-hidden", "false");
      renderFavoriteManagerList();
    }

    function closeFavoriteManager() {
      refs.favoriteManagerModal.classList.add("hidden");
      refs.favoriteManagerModal.setAttribute("aria-hidden", "true");
    }

    function getFavoriteManagerItems() {
      var query = refs.favoriteManagerSearch.value.trim().toLowerCase();
      return catalog.getAllEvents().filter(function (item) {
        return !query || item.label.toLowerCase().indexOf(query) !== -1 || item.id.toLowerCase().indexOf(query) !== -1;
      });
    }

    function getEventSections(items) {
      var favorites = [];
      var groups = buildGroupedEvents(
        (items || []).filter(function (item) {
          if (isFavoriteEvent(item.id)) {
            favorites.push(item);
            return false;
          }
          return true;
        })
      );
      var sections = [];
      if (favorites.length) {
        favorites.sort(function (a, b) {
          return state.favoriteEventIds.indexOf(a.id) - state.favoriteEventIds.indexOf(b.id);
        });
        sections.push({ title: "收藏夹", items: favorites, favorite: true });
      }
      catalog.CATEGORY_ORDER.forEach(function (category) {
        if (groups[category] && groups[category].length) {
          sections.push({ title: category, items: groups[category], favorite: false });
        }
      });
      return sections;
    }

    function renderFavoriteManagerList() {
      if (!refs.favoriteManagerList) return;
      var items = getFavoriteManagerItems();
      refs.favoriteManagerList.innerHTML = "";
      if (!items.length) {
        refs.favoriteManagerList.appendChild(createPlaceholder("没有匹配的事件。"));
        return;
      }
      getEventSections(items).forEach(function (sectionInfo) {
        var section = document.createElement("section");
        section.className = "event-group";
        section.innerHTML = '<h3 class="event-group-title">' + esc(sectionInfo.title) + "</h3>";
        var grid = document.createElement("div");
        grid.className = "favorite-manager-grid" + (sectionInfo.favorite ? " favorite-sortable" : "");
        if (sectionInfo.favorite) bindFavoriteGridDrag(grid);
        sectionInfo.items.forEach(function (item) {
          grid.appendChild(createFavoriteManagerItem(item, !!sectionInfo.favorite));
        });
        section.appendChild(grid);
        refs.favoriteManagerList.appendChild(section);
      });
    }

    function ensurePlaceholder() {
      if (!dragState.placeholderEl) {
        dragState.placeholderEl = document.createElement("div");
        dragState.placeholderEl.className = "favorite-drop-placeholder";
      }
      return dragState.placeholderEl;
    }

    function bindFavoriteGridDrag(grid) {
      grid.addEventListener("dragover", function (event) {
        if (!dragState.draggingId) return;
        event.preventDefault();
        var target = event.target.closest(".favorite-manager-item.sortable");
        if (!target || target.dataset.eventId === dragState.draggingId) {
          clearGridDragOver(grid);
          if (event.target === grid || event.target === ensurePlaceholder()) {
            if (ensurePlaceholder().parentNode !== grid || ensurePlaceholder().nextSibling) {
              grid.appendChild(ensurePlaceholder());
            }
          }
          return;
        }
        var insertAfter = shouldInsertAfter(target, event);
        if (
          dragState.overId === target.dataset.eventId &&
          dragState.insertAfter === insertAfter &&
          ensurePlaceholder().parentNode === grid
        ) {
          return;
        }
        dragState.overId = target.dataset.eventId;
        dragState.insertAfter = insertAfter;
        clearGridDragOver(grid);
        target.classList.add(insertAfter ? "drag-over-after" : "drag-over-before");
        grid.insertBefore(ensurePlaceholder(), insertAfter ? target.nextSibling : target);
      });
      grid.addEventListener("dragleave", function (event) {
        if (!grid.contains(event.relatedTarget)) {
          clearGridDragOver(grid);
        }
      });
      grid.addEventListener("drop", function (event) {
        if (!dragState.draggingId) return;
        event.preventDefault();
        clearGridDragOver(grid);
        var target = event.target.closest(".favorite-manager-item.sortable");
        if (target && target.dataset.eventId !== dragState.draggingId) {
          reorderFavorite(dragState.draggingId, target.dataset.eventId, dragState.insertAfter);
        } else {
          reorderFavoriteToEnd(dragState.draggingId);
        }
      });
    }

    function createFavoriteManagerItem(item, sortable) {
      var row = document.createElement("label");
      row.className = "favorite-manager-item" + (isFavoriteEvent(item.id) ? " active" : "") + (sortable ? " sortable" : "");
      row.dataset.eventId = item.id;
      if (sortable) row.setAttribute("draggable", "true");

      var input = document.createElement("input");
      input.type = "checkbox";
      input.checked = isFavoriteEvent(item.id);
      input.addEventListener("change", function () {
        if (input.checked && !isFavoriteEvent(item.id)) {
          state.favoriteEventIds = [item.id].concat(
            state.favoriteEventIds.filter(function (id) {
              return id !== item.id;
            })
          );
        } else if (!input.checked) {
          state.favoriteEventIds = state.favoriteEventIds.filter(function (id) {
            return id !== item.id;
          });
        }
        persistFavorites();
      });

      var meta = document.createElement("div");
      meta.className = "favorite-manager-meta";
      meta.innerHTML = "<strong>" + esc(item.label) + '</strong><span class="hint">' + esc(item.category || "未分类") + "</span>";

      row.appendChild(input);
      row.appendChild(meta);

      if (sortable) {
        var handle = document.createElement("span");
        handle.className = "favorite-drag-handle";
        handle.setAttribute("aria-hidden", "true");
        handle.setAttribute("title", "拖拽调整收藏顺序");
        handle.dataset.hint = "拖拽排序";
        handle.textContent = "⋮⋮";
        row.appendChild(handle);

        row.addEventListener("dragstart", function (event) {
          dragState.draggingId = item.id;
          row.classList.add("dragging");
          if (event.dataTransfer) {
            event.dataTransfer.effectAllowed = "move";
            event.dataTransfer.setData("text/plain", item.id);
          }
        });
        row.addEventListener("dragend", function () {
          dragState.draggingId = "";
          dragState.overId = "";
          clearFavoriteDragState();
        });
      }

      return row;
    }

    function clearGridDragOver(grid) {
      Array.prototype.forEach.call(grid.querySelectorAll(".favorite-manager-item.drag-over"), function (node) {
        node.classList.remove("drag-over");
      });
      Array.prototype.forEach.call(grid.querySelectorAll(".favorite-manager-item.drag-over-before, .favorite-manager-item.drag-over-after"), function (node) {
        node.classList.remove("drag-over-before", "drag-over-after");
      });
    }

    function shouldInsertAfter(target, event) {
      var rect = target.getBoundingClientRect();
      var offsetX = event.clientX - rect.left;
      return offsetX > rect.width / 2;
    }

    function clearFavoriteDragState() {
      if (!refs.favoriteManagerList) return;
      Array.prototype.forEach.call(refs.favoriteManagerList.querySelectorAll(".favorite-manager-item"), function (item) {
        item.classList.remove("dragging", "drag-over", "drag-over-before", "drag-over-after");
      });
      if (dragState.placeholderEl && dragState.placeholderEl.parentNode) {
        dragState.placeholderEl.parentNode.removeChild(dragState.placeholderEl);
      }
    }

    function reorderFavorite(dragId, targetId, insertAfter) {
      if (!dragId || !targetId || dragId === targetId) return;
      var order = state.favoriteEventIds.slice();
      var fromIndex = order.indexOf(dragId);
      var toIndex = order.indexOf(targetId);
      if (fromIndex === -1 || toIndex === -1) return;
      order.splice(fromIndex, 1);
      if (fromIndex < toIndex) toIndex -= 1;
      if (insertAfter) toIndex += 1;
      order.splice(toIndex, 0, dragId);
      state.favoriteEventIds = order;
      showToast("已调整收藏顺序。", "success");
      persistFavorites();
    }

    function reorderFavoriteToEnd(dragId) {
      if (!dragId) return;
      var order = state.favoriteEventIds.slice();
      var fromIndex = order.indexOf(dragId);
      if (fromIndex === -1) return;
      order.splice(fromIndex, 1);
      order.push(dragId);
      state.favoriteEventIds = order;
      showToast("已调整收藏顺序。", "success");
      persistFavorites();
    }

    function setVisibleFavorites(shouldFavorite) {
      var ids = getFavoriteManagerItems().map(function (item) {
        return item.id;
      });
      if (shouldFavorite) {
        state.favoriteEventIds = normalizeFavoriteIds(ids.concat(state.favoriteEventIds));
        showToast("已批量加入收藏。", "success");
      } else {
        state.favoriteEventIds = state.favoriteEventIds.filter(function (id) {
          return ids.indexOf(id) === -1;
        });
        showToast("已批量取消收藏。");
      }
      persistFavorites();
    }

    function createEventEntry(item, active, onSelect) {
      var wrapper = document.createElement("div");
      wrapper.className = "event-entry" + (isFavoriteEvent(item.id) ? " favorite" : "");

      var button = document.createElement("button");
      button.type = "button";
      button.className = "event-item" + (active ? " active" : "");
      button.textContent = item.label;
      button.addEventListener("click", onSelect);

      var star = document.createElement("button");
      star.type = "button";
      star.className = "favorite-toggle" + (isFavoriteEvent(item.id) ? " active" : "");
      star.setAttribute("aria-label", isFavoriteEvent(item.id) ? "取消收藏" : "收藏事件");
      star.setAttribute("title", isFavoriteEvent(item.id) ? "取消收藏" : "收藏事件");
      star.innerHTML = '<span aria-hidden="true">★</span>';
      star.addEventListener("click", function (event) {
        event.stopPropagation();
        star.classList.add("pulse");
        globalObject.setTimeout(function () {
          star.classList.remove("pulse");
        }, 280);
        toggleFavoriteEvent(item.id);
      });

      wrapper.appendChild(button);
      wrapper.appendChild(star);
      return wrapper;
    }

    return {
      normalizeFavoriteIds: normalizeFavoriteIds,
      persistFavorites: persistFavorites,
      isFavoriteEvent: isFavoriteEvent,
      toggleFavoriteEvent: toggleFavoriteEvent,
      openFavoriteManager: openFavoriteManager,
      closeFavoriteManager: closeFavoriteManager,
      getFavoriteManagerItems: getFavoriteManagerItems,
      renderFavoriteManagerList: renderFavoriteManagerList,
      setVisibleFavorites: setVisibleFavorites,
      getEventSections: getEventSections,
      createEventEntry: createEventEntry,
    };
  }

  global.TynanFavorites = {
    createFavoritesApi: createFavoritesApi,
  };
})(window);
