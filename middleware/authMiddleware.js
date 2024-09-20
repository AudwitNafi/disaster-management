import { verifyJWT } from "../utils/tokenUtils.js";

//verify whether the cookie is present
export const authenticateUser = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) res.status(401).json({ error: "Token is not valid" });
  try {
    const { userId, role } = verifyJWT(token);
    // console.log(user);
    req.user = { userId, role };
    next();
  } catch (error) {
    res.status(401).json({ error: "JWT is not valid" });
  }
};

export const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new UnauthorizedError("Unauthorized to access this route");
    }
    next();
  };
};

export const checkForTestUser = (req, res, next) => {
  if (req.user.testUser) throw new BadRequestError("Demo User. Read Only!");
  next();
};
