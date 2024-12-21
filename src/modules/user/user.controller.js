import axios from 'axios';

export const index = async (req, res, next) => {
    try {
        const api = process.env.API_URL;
        const { token } = req;

        const usersResponse = await axios.get(`${api}/api/v1/users`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        
        const userData = usersResponse.data.data || [];
        console.log({userData});
        
        const data = {
            token : token,
            api : api,
            users : usersResponse.data.data || [],
        }

        res.edge('pages/user/index', data);
    } catch (error) {
        next(error)
    }
};