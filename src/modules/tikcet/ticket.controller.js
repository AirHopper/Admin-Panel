export const index = async (req, res, next) => {
  try {
    res.edge("pages/ticket/index");
  } catch (error) {
    next(error);
  }
};
