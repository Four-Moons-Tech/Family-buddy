const withAuth = (req, res, next) => {
    // TODO: Add a comment describing the functionality of this if statement
    // if the user is not logged in 
    if (!req.session.logged_in) {
      res.redirect('/login');//redirects to login
    } else {
      next();
    }
  };
  
  module.exports = withAuth;