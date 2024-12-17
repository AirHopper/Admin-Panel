import axios from 'axios';

const formatRupiah = (value) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(value);
};

export const index = async (req, res, next) => {
  try {
    const api = process.env.API_URL;
    
    const flightsResponse = await axios.get(`${api}/api/v1/flights?limit=999999`);

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
    const api = process.env.API_URL;
    const id = req.params.id;

    const flightDetailResponse = await axios.get(`${api}/api/v1/flights/${id}`);
    const flight = {
      ...flightDetailResponse.data.data,
      price: formatRupiah(flightDetailResponse.data.data.price),
      totalPrice: formatRupiah(flightDetailResponse.data.data.totalPrice),
    };

    const data = {
      api: api,
      flight,
    };

    res.edge("pages/flight/detail", data);
  } catch (error) {
    next(error);
  }
};

export const create = async (req, res, next) => {
  try {
    const api = process.env.API_URL;
    
    const data = {
      api: api,
    };

    res.edge("pages/flight/create", data  )
  } catch (error) {
    next(error);
  }
};
