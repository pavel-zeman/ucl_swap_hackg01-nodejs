"use strict";
const SwapHackAbl = require("../../abl/swap-hack-abl.js");

class SwapHackController {
  init(ucEnv) {
    return SwapHackAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }
}

module.exports = new SwapHackController();
