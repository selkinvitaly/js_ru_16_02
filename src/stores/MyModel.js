"use strict";

export default function(data) {
  let res = data.slice();

  res._loaded = true;
  res.loaded = function(bool) {
    if (typeof bool === "undefined") {
      return this._loaded;
    }
    this._loaded = bool;
  };

  return res;
};
