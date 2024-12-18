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
    const { token } = req;
    
    const flightsResponse = await axios.get(`${api}/api/v1/flights?limit=999999`);

    const data = {
      api: api,
      token: token,
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
    const { token } = req;

    const flightDetailResponse = await axios.get(`${api}/api/v1/flights/${id}`);
    const flight = {
      ...flightDetailResponse.data.data,
      price: formatRupiah(flightDetailResponse.data.data.price),
      totalPrice: formatRupiah(flightDetailResponse.data.data.totalPrice),
    };

    const data = {
      api: api,
      token: token,
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
    const { token } = req;

    const routesResponse = await axios.get(`${api}/api/v1/routes`);
    const airplanesResponse = await axios.get(`${api}/api/v1/airplanes`);
    const terminalsResponse = await axios.get(`${api}/api/v1/terminals`);
    const discountsResponse = await axios.get(`${api}/api/v1/discounts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });


    const data = {
      api: api,
      token: token,
      routes: routesResponse.data.data || [],
      airplanes: airplanesResponse.data.data || [],
      terminals: terminalsResponse.data.data || [],
      discounts: discountsResponse.data.data || [],
    };

    res.edge("pages/flight/create", data);
  } catch (error) {
    next(error);
  }
};
