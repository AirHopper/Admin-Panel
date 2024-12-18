import axios from "axios";

const formatRupiah = (value) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(value);
};

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
    const ticket = {
      ...ticketDetailResponse.data.data,
      totalPrice: formatRupiah(ticketDetailResponse.data.data.totalPrice)
    };

    const data = {  
      api: api,
      ticket,
    };

    res.edge("pages/ticket/detail", data);
  } catch (error) {
    next(error);
  }
};
