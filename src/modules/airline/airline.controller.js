import axios from "axios";

export const index = async (req, res, next) => {
  try {
    const api = process.env.API_URL;

    const { token } = req;
    
    const response = await axios.get(`${api}/api/v1/airlines`);
    const airlines = response.data.data;

    const data = {  
      api: api,
      token: token,
      airlines: airlines,
    };

    res.edge("pages/airline/index", data);
  } catch (error) {
    next(error);
  }
};

export const listAirplanes = async (req, res, next) => {
  try {
    const api = process.env.API_URL;
    const code = req.params.code;
    const { token } = req;

    const airlinesResponse = await axios.get(`${api}/api/v1/airlines/${code}`);

    const data = {
      api: api,
      token: token,
      airlines: airlinesResponse.data.data,
    };

    res.edge("pages/airline/listAirplanes", data);
  } catch (error) {
    next(error);
  }
};

