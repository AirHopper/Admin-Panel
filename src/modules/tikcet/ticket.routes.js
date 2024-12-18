import * as ticketController from "./ticket.controller.js";
import {validateCookies} from '../../middlewares/auth.js';

export default (router) => {
  const prefix = "/ticket";
  router.get(prefix + "/", validateCookies, ticketController.index);
  router.get(prefix + "/:id", validateCookies, ticketController.detail);
};

