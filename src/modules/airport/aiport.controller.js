import axios from "axios";

export const index = async (req, res, next) => {
  try {
    const api = process.env.API_URL;

    const { token } = req;
    
    const citiesResponse = await axios.get(`${api}/api/v1/cities`);
    const airportsResponse = await axios.get(`${api}/api/v1/airports`);

    const data = {
      api: api,
      token: token,
      cities: citiesResponse.data.data || [],
      airports: airportsResponse.data.data || [],
    };

    res.edge("pages/airport/index", data);
  } catch (error) {
    next(error);
  }
};

export const terminal = async (req, res, next) => {
  try {
    const api = process.env.API_URL;
    const { code } = req.params;
    const { token } = req;
    
    const detailAirportResponse = await axios.get(`${api}/api/v1/airports/${code}`);

    const data = {
      api: api,
      code: code,
      token: token,
      airport: detailAirportResponse.data.data,
      terminals: detailAirportResponse.data.data.Terminals,
    };


    res.edge("pages/airport/terminal", data);
  } catch (error) {
    next(error);
  }
};
