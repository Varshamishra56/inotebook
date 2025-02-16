const jwt = require("jsonwebtoken");
const JWT_SECRET = "IamVarshaIamstudying";

const fetchuser = (req, res, next) => {
  // Get user from the JWT token and add id to req object
  const token = req.header("auth-token");
  if (!token) {
    return res
      .status(401)
      .send({ error: "Please authenticate using a valid token" });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    return res.status(401).send({ error: "Invalid token" });
  }
};

module.exports = fetchuser;
