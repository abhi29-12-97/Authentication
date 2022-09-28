//checking if the user is authenticated to visit particular page or not
export default class Auth {
  static checkAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    req.flash("error", "please login to continue");
    return res.redirect("/login");
  };

  static checkNotAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
      return res.redirect("/home");
    }
    return next();
  };
}
