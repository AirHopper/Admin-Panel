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
    const token = req.cookies.token;

    const tiketResponse = await axios.get(`${api}/api/v1/tickets?limit=999999`);  
    const airPortResponse = await axios.get(`${api}/api/v1/airports`);

    const data = {
      api: api,
      token: token,
      tickets: tiketResponse.data.data || [],
      airports: airPortResponse.data.data || [],
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

export const create = async (req, res, next) => {
  try {
    const api = process.env.API_URL;
    const {token} = req;
    const routeId = req.query.routeId;
    const departureDate = req.query.departureDate;

    const routeResponse = await axios.get(`${api}/api/v1/routes/${routeId}`);
    const departureAirport = routeResponse.data.data.departureAirportId;
    const arrivalAirport = routeResponse.data.data.arrivalAirportId;

    let flightDepartureData = [];
    let flightArrivalData = [];

    if (departureDate) {
      const flightDepartureResponse = await axios.get(`${api}/api/v1/flights?limit=999999&search[departureAirport]=${departureAirport}&search[flightDate]=${departureDate}`);
      flightDepartureData = flightDepartureResponse.data.data;

      const flightArrivalResponse = await axios.get(`${api}/api/v1/flights?limit=999999&search[arrivalAirport]=${arrivalAirport}&search[flightDate]=${departureDate}`);
      flightArrivalData = flightArrivalResponse.data.data;
    }
    const discountsResponse = await axios.get(`${api}/api/v1/discounts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log({flightDepartureData, flightArrivalData});

    const data = {
      api: api,
      token: token,
      routeId: routeId,
      departureDate: departureDate,
      route: routeResponse.data.data,
      flightDepartureData,
      flightArrivalData,
      discounts: discountsResponse.data.data,
    };

    res.edge("pages/ticket/create", data);
  } catch (error) {
    next(error);
  }
};
