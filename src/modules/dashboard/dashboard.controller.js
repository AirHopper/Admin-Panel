import axios from 'axios';

export const index = async (req, res, next) => {
    try {
        const api = process.env.API_URL;

        // Ambil token dari cookie
        const token = req.cookies.AuthToken;
        const email = req.cookies.email;
        const role = req.cookies.role;

        if (!token) {
            return res.redirect('/admin/auth/login'); // Redirect ke halaman login jika token tidak ada
        }

        const cities = await axios.get(`${api}/api/v1/cities`);
        const airports = await axios.get(`${api}/api/v1/airports`);
        const airlines = await axios.get(`${api}/api/v1/airlines`);
        const airplanes = await axios.get(`${api}/api/v1/airplanes`);
        const flights = await axios.get(`${api}/api/v1/flights`);
        const tickets = await axios.get(`${api}/api/v1/tickets`);  
        // const users = await axios.get(`${api}/api/v1/users`);

        
        const totalData = {
            totalCities : cities.data.data.length,
            totalAirports : airports.data.data.length,
            totalAirlines : airlines.data.data.length,
            totalAirplanes : airplanes.data.data.length,
            totalFlights : flights.data.data.length,
            totalTickets : tickets.data.data.length,
            // totalUsers : users.data.data.length,
        }

        res.edge('pages/dashboard/index', { totalData, email, role });
    } catch (error) {
        next(error)
    }
};