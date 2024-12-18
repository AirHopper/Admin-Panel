import axios from "axios";

export const index = async (req, res, next) => {
  try {
    const api = process.env.API_URL;

    const { token } = req;

    const citiesResponse = await axios.get(`${api}/api/v1/cities`);
    const airportsResponse = await axios.get(`${api}/api/v1/airports`);
    const routesResponse = await axios.get(`${api}/api/v1/routes`);

    const data = {
      api: api,
      token: token,
      cities: citiesResponse.data.data || [],
      airports: airportsResponse.data.data || [],
      routes: routesResponse.data.data || [],
    };

    res.edge("pages/route/index", data);
  } catch (error) {
    next(error);
  }
};
