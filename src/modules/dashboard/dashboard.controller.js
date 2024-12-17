import axios from 'axios';

export const index = async (req, res, next) => {
    try {
        const api = process.env.API_URL;
        const { token, email, role } = req;

        const cities = await axios.get(`${api}/api/v1/cities`);
        const airports = await axios.get(`${api}/api/v1/airports`);
        const airlines = await axios.get(`${api}/api/v1/airlines`);
        const airplanes = await axios.get(`${api}/api/v1/airplanes`);
        const flights = await axios.get(`${api}/api/v1/flights`);
        const tickets = await axios.get(`${api}/api/v1/tickets`);  
        const users = await axios.get(`${api}/api/v1/users`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

        
        const totalData = {
            totalCities : cities.data.data.length,
            totalAirports : airports.data.data.length,
            totalAirlines : airlines.data.data.length,
            totalAirplanes : airplanes.data.data.length,
            totalFlights : flights.data.data.length,
            totalTickets : tickets.data.data.length,
            totalUsers : users.data.data.length,
        }

        res.edge('pages/dashboard/index', { totalData, email, role });
    } catch (error) {
        next(error)
    }
};