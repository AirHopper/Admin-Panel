import * as routeController from "./route.controller.js";
import {validateCookies} from '../../middlewares/auth.js';

export default (router) => {
  const prefix = "/route";
  router.get(prefix + "/", validateCookies, routeController.index);
};
