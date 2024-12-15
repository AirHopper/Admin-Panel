import axios from "axios";

export const index = async (req, res, next) => {
  try {
    const api = process.env.API_URL;
    
    const citiesResponse = await axios.get(`${api}/api/v1/cities`);
    const routesResponse = await axios.get(`${api}/api/v1/routes`);

    const data = {
      api: api,
      cities: citiesResponse.data.data || [],
      routes: routesResponse.data.data || [],
    };

    res.edge("pages/route/index", data);
  } catch (error) {
    next(error);
  }
};
