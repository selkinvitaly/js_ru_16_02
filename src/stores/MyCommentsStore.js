"use strict";

import { EventEmitter } from "events";
const CHANGE_EVENT = "COMMENTS_UPDATE";

import { LOAD_COMMENTS_BY_PAGE, _SUCCESS, _START } from "../actions/constants";
import dispatcher from "../dispatcher";
import myModel from "./MyModel";
import * as actions from "../actions/comment";

class MyCommentsStore extends EventEmitter {
  constructor(stores) {
    super();

    this._stores = stores;
    this._items = {};
    this._loading = false;
    this._total = null;

    dispatcher.register(action => {
      const { type, data, response } = action;

      switch (type) {
        case LOAD_COMMENTS_BY_PAGE + _SUCCESS:
          let key = `${data.page}:${data.limit}`;
          let items = response.records;

          this._total = response.total;
          this.add(key, items);
          this._loading = false;
          this.emitChange();
          break;

        case LOAD_COMMENTS_BY_PAGE + _START:
          this._loading = true;
          this.emitChange();
          break;

      }
    });
  }

  get loading() {
    return this._loading;
  }

  get total() {
    return this._total;
  }

  add(key, items) {
    this._items[key] = myModel(items);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  getByPage(key) {
    return this._items[key].sort((a, b) => a.id - b.id);
  }

  wasLoaded(key) {
    return this._items[key] ? !!this._items[key].loaded : false;
  }

  getOrLoadByPage(page, limit = 10) {
    const key = `${page}:${limit}`;

    if (!this.wasLoaded(key)) {
      console.log("FROM API"); // dev
      actions.loadCommentsByPage({page, limit});
    } else {
      console.log("FROM STORE"); // dev
      return this.getByPage(key);
    }
  }

}

export default MyCommentsStore;
