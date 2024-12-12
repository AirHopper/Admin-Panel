import * as routeController from "./route.controller.js";

export default (router) => {
  const prefix = "/route";
  router.get(prefix + "/", routeController.index);
};
