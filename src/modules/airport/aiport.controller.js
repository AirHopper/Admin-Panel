import axios from "axios";

export const index = async (req, res, next) => {
  try {
    const api = process.env.API_URL;
    
    const citiesResponse = await axios.get(`${api}/api/v1/cities`);
    const airportsResponse = await axios.get(`${api}/api/v1/airports`);

    const data = {
      cities: citiesResponse.data.data || [],
      airports: airportsResponse.data.data || [],
    };

    res.edge("pages/airport/index", data);
  } catch (error) {
    next(error);
  }
};
