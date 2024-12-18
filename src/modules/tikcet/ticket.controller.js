import axios from "axios";

export const index = async (req, res, next) => {
  try {
    const api = process.env.API_URL;

    const tiketResponse = await axios.get(`${api}/api/v1/tickets?limit=999999`);  

    const data = {
      api: api,
      tickets: tiketResponse.data.data || [],
    };

    res.edge("pages/ticket/index", data);
  } catch (error) {
    next(error);
  }
};
