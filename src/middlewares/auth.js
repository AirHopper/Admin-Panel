// middlewares/auth.middleware.js
export const validateCookies = (req, res, next) => {
    const token = req.cookies.AuthToken;
    const email = req.cookies.email;
    const role = req.cookies.role;
  
    if (!token || !email || !role) {
      return res.redirect('/admin/auth/login');
    }

    req.email = email;
    req.role = role;
    req.token = token;
  
    next();
  };
  