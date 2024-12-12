export const index = async (req, res, next) => {
  try {
    res.edge("pages/airline/index");
  } catch (error) {
    next(error);
  }
};
