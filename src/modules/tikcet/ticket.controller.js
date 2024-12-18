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

export const detail = async (req, res, next) => {
  try {
    const api = process.env.API_URL;
    const id = req.params.id;

    const ticketDetailResponse = await axios.get(`${api}/api/v1/tickets/${id}`);

    const data = {  
      api: api,
      ticket: ticketDetailResponse.data.data || {},
    };

    res.edge("pages/ticket/detail", data);
  } catch (error) {
    next(error);
  }
};
