const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token)
  if (token) {
    const decoded = jwt.verify(token, process.env.key);
   
    if (decoded) {
      const adminID = decoded.adminID;
      
      req.body.adminID = adminID;
      
      
      next();
    } else {
      res.send("Not authorized ,You cannot edit this token.");
    }
  } else {
    res.send("Inadequate permissions, Please login first.");
  }
};

module.exports = { authenticate };
