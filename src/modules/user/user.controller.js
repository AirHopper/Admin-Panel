import axios from 'axios';

export const index = async (req, res, next) => {
    try {
        const api = process.env.API_URL;
        const { token, email, role } = req;

        const users = await axios.get(`${api}/api/v1/users`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        
        const data = {
            totalUsers : users.data.data.length,
        }

        res.edge('pages/user/index', { data, email, role });
    } catch (error) {
        next(error)
    }
};