import * as airportController from "./aiport.controller.js";

export default (router) => {
  const prefix = "/airport";
  router.get(prefix + "/", airportController.index);
};
