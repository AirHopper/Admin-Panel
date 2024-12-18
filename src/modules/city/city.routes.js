import * as cityController from "./city.controller.js";
import {validateCookies} from '../../middlewares/auth.js';

export default (router) => {
  const prefix = "/city";
  router.get(prefix + "/", validateCookies, cityController.index);
};
