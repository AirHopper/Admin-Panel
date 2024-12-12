export const index = async (req, res, next) => {
  try {
    res.edge("pages/city/index");
  } catch (error) {
    next(error);
  }
};
