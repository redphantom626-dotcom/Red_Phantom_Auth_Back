import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const token = req.headers.token;

  if (!token || token === "undefined") {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token",
      error: error.message,
    });
  }
};
