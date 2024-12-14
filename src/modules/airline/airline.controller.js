import axios from "axios";

export const index = async (req, res, next) => {
  try {
    const api = process.env.API_URL;
    
    const response = await axios.get(`${api}/api/v1/airlines`);
    const airlines = response.data.data;

    res.edge("pages/airline/index", { airlines, api });
  } catch (error) {
    next(error);
  }
};
