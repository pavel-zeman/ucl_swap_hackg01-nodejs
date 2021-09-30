"use strict";

class PollAbl {
  constructor() {
    this._requests = [];
  }

  async poll() {
    let promise = new Promise((resolve) => {
      this._requests.push(resolve);
    });
    return await promise;
  }

  async send(dtoIn) {
    this._requests.forEach((item) => item(dtoIn));
    this._requests = [];
    return {};
  }
}

module.exports = new PollAbl();
