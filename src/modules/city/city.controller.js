import axios from "axios";

export const index = async (req, res, next) => {
  try {
    const response = await axios.get("https://airhopper-304285428031.asia-southeast1.run.app/api/v1/cities");
    const cities = response.data.data;

    res.edge("pages/city/index", { cities });
  } catch (error) {
    next(error);
  }
};
