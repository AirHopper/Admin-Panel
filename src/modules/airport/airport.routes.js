import * as airportController from "./aiport.controller.js";
import {validateCookies} from '../../middlewares/auth.js';

export default (router) => {
  const prefix = "/airport";
  router.get(prefix + "/", validateCookies, airportController.index);
};
