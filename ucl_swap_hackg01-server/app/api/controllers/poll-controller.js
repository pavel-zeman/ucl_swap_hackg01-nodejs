"use strict";
const PolLAbl = require("../../abl/poll-abl");

class PollController {
  poll() {
    return PolLAbl.poll();
  }

  send(ucEnv) {
    return PolLAbl.send(ucEnv.getDtoIn());
  }
}

module.exports = new PollController();
