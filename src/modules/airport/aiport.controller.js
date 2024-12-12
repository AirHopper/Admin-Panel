export const index = async (req, res, next) => {
  try {
    res.edge("pages/airport/index");
  } catch (error) {
    next(error);
  }
};
