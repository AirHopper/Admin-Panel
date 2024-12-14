import axios from 'axios';

export const index = async (req, res, next) => {
  try {
    const api = process.env.API_URL;
    
    const flightsResponse = await axios.get(`${api}/api/v1/flights?limit=100`);

    const data = {
      api: api,
      flights: flightsResponse.data.data || [],
    };

    res.edge("pages/flight/index", data);
  } catch (error) {
    next(error);
  }
};

export const detail = async (req, res, next) => {
  try {
    res.edge("pages/flight/detail");
  } catch (error) {
    next(error);
  }
};
