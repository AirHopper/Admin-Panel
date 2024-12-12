import * as cityController from "./city.controller.js";

export default (router) => {
  const prefix = "/city";
  router.get(prefix + "/", cityController.index);
};
