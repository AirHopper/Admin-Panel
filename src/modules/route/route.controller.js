export const index = async (req, res, next) => {
  try {
    res.edge("pages/route/index");
  } catch (error) {
    next(error);
  }
};
