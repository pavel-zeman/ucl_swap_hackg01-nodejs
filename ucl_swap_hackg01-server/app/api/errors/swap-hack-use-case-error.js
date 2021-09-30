"use strict";
const { UseCaseError } = require("uu_appg01_server").AppServer;

class SwapHackUseCaseError extends UseCaseError {
  static get ERROR_PREFIX() {
    return "ucl-swap-hack/";
  }

  constructor(dtoOut, paramMap = {}, cause = null) {
    if (paramMap instanceof Error) {
      cause = paramMap;
      paramMap = {};
    }
    super({ dtoOut, paramMap, status: 400 }, cause);
  }
}

module.exports = SwapHackUseCaseError;
