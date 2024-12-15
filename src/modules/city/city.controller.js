import axios from "axios";

export const index = async (req, res, next) => {
  try {
    const api = process.env.API_URL;
    
    const citiesResponse = await axios.get(`${api}/api/v1/cities`);
    
    const data = {
      api: api,
      cities: citiesResponse.data.data || [],
    };  

    res.edge("pages/city/index", data);
  } catch (error) {
    next(error);
  }
};
