import axios from 'axios';

export const index = async (req, res, next) => {
    try {
        const api = process.env.API_URL;
        const { token } = req;

        const discountsResponse = await axios.get(`${api}/api/v1/discounts`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        
        const data = {
            token : token,
            api : api,
            discounts : discountsResponse.data.data || [],
        }

        res.edge('pages/discount/index', data);
    } catch (error) {
        next(error)
    }
};