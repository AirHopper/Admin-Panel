import * as ticketController from "./ticket.controller.js";

export default (router) => {
  const prefix = "/ticket";
  router.get(prefix + "/", ticketController.index);
};
