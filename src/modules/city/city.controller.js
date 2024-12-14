import axios from "axios";

export const index = async (req, res, next) => {
  try {
    const api = process.env.API_URL;
    
    const response = await axios.get(`${api}/api/v1/cities`);
    const cities = response.data.data;


    res.edge("pages/city/index", { cities, api });
  } catch (error) {
    next(error);
  }
};
