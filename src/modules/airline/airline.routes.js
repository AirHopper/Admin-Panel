import * as airlineController from "./airline.controller.js";
import {validateCookies} from '../../middlewares/auth.js';

export default (router) => {
  const prefix = "/airline";
  router.get(prefix + "/", validateCookies, airlineController.index);
  router.get(prefix + "/:code/airplanes", validateCookies, airlineController.listAirplanes);

};
