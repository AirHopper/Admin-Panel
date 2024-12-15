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

export const listAirplanes = async (req, res, next) => {
  try {
    const api = process.env.API_URL;
    // const code = req.params.code;

    const airplanesResponse = await axios.get(`${api}/api/v1/airplanes`);

    const data = {
      api: api,
      airplanes: airplanesResponse.data.data,
    };

    res.edge("pages/airline/listAirplanes", data);
  } catch (error) {
    next(error);
  }
};

