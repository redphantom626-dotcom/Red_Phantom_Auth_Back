import jwt from "jsonwebtoken";

export const authentication = () => {
  return async (req, res, next) => {
    try {
      const token = req.cookies.token;

      if (!token) {
        return res.json({ message: "Token Required" });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = decoded;

      next();
    } catch (error) {
      return res.json({ message: error.message });
    }
  };
};
