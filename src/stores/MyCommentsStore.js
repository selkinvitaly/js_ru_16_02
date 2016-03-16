"use strict";

import { EventEmitter } from "events";
const CHANGE_EVENT = "CHANGE_EVENT";

import { LOAD_COMMENTS_BY_PAGE, _SUCCESS, _START } from "../actions/constants";
import dispatcher from "../dispatcher";
import * as actions from "../actions/comment";

class MyCommentsStore extends EventEmitter {
  constructor(stores, initialState) {
    super();

    this._stores = stores;
    this._items = {};
    this._lastTimeStamp = 0;
    this._interval = 30000;
    this._loading = false;
    this._total = null;

    if (initialState) {
      initialState.forEach(this.add.bind(this));
    }

    dispatcher.register(action => {
      const { type, data, response } = action;

      switch (type) {
        case LOAD_COMMENTS_BY_PAGE + _SUCCESS:
          console.log(response);

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
    this._items[key] = items;
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
    const key = `${page}:${limit}`;

    return this._items[key] ? this._items[key].slice().sort((a, b) => a.id - b.id) : [];
  }

  getOrLoadByPage(page, limit = 10) {
    if ((Date.now() - this._lastTimeStamp) > this._interval) {
      actions.loadCommentsByPage({page, limit});
    } else {
      return this.getByPage(`${page}:${limit}`);
    }
  }

}

export default MyCommentsStore;
