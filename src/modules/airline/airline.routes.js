import * as airlineController from "./airline.controller.js";

export default (router) => {
  const prefix = "/airline";
  router.get(prefix + "/", airlineController.index);
};
