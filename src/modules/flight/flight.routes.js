import * as flightController from "./flight.controller.js";

export default (router) => {
  const prefix = "/flight";
  router.get(prefix + "/", flightController.index);
  router.get(prefix + "/:id", flightController.detail);
};
