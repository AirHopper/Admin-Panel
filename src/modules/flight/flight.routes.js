import * as flightController from "./flight.controller.js";
import {validateCookies} from '../../middlewares/auth.js';

export default (router) => {
  const prefix = "/flight";
  router.get(prefix + "/", validateCookies, flightController.index);
  router.get(prefix + "/create", validateCookies, flightController.create);
  router.get(prefix + "/:id", validateCookies, flightController.detail);
};
