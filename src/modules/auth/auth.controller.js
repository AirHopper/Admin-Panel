import * as AuthService from "./auth.service.js";

export const login = async (req, res, next) => {
  try {
    const data = await AuthService.login();

    res.edge("pages/auth/login", { login: data.result });
  } catch (error) {
    next(error);
  }
};
