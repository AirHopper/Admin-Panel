import * as discountController from "./discount.controller.js";
import {validateCookies} from '../../middlewares/auth.js';

export default (router) => {
  const prefix = "/discount";
  router.get(prefix + "/", validateCookies, discountController.index);
};
