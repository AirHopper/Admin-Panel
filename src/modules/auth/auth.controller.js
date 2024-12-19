import axios from 'axios';

export const loginPage = async (req, res, next) => {
  try {
    const api = process.env.API_URL;

    const airlineResponse = await axios.get(`${api}/api/v1/airlines/randomLogo`);

    const data = {
      api: api,
      airline: airlineResponse.data.data,
    };

    res.edge("pages/auth/login", data);
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const api = process.env.API_URL;

    const { identifier, password } = req.body;

    const response = await axios.post(`${api}/api/v1/auth/login`, {
      identifier,
      password,
    });

    if (response.data.success) {
      const token = response.data.data.token;
      const email = response.data.data.email;
      const role = response.data.data.role;

      res.cookie('AuthToken', token, {
        httpOnly: true,    
        path: '/',
        secure: true,
        sameSite: 'Strict',
        maxAge: 3600000,
      });

      res.cookie('email', email, {
        httpOnly: true, 
        path: '/',
        secure: true,
        sameSite: 'Strict', 
        maxAge: 3600000,
      });

      res.cookie('role', role, {
        httpOnly: true,
        path: '/',
        secure: true, 
        sameSite: 'Strict',
        maxAge: 3600000,
      });

      res.redirect('/admin/dashboard');
    } else {
      res.edge('pages/auth/login', { error: response.data.message || 'Login failed' });
    }
  } catch (error) {
    console.error(error.message);
    res.edge('pages/auth/login', { error: 'An error occurred during login. Please try again.' });
  }
};

export const logout = (req, res, next) => {
  try {
    res.clearCookie('AuthToken', { 
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', 
      sameSite: 'Strict'
    });
    res.clearCookie('email', { 
      path: '/', 
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production', 
      sameSite: 'Strict' 
    });
    res.clearCookie('role', { 
      path: '/', 
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production', 
      sameSite: 'Strict' 
    });

    res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    next(error);
  }
};


