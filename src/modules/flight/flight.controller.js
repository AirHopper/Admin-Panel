export const index = async (req, res, next) => {
  try {
    res.edge("pages/flight/index");
  } catch (error) {
    next(error);
  }
};
