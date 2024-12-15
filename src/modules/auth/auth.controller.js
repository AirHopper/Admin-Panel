
export const loginPage = async (req, res, next) => {
  try {
    const api = process.env.API_URL;

    res.edge("pages/auth/login", { api });
  } catch (error) {
    next(error);
  }
};

