import jwt from "jsonwebtoken";

export async function authMiddleware(req, res, next) {
  console.log("hello middleware");

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(400).json({
      success: false,
      message: "Authorization header missing",
    });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(400).json({
      success: false,
      message: "Token required !! please login first",
    });
  }

  try {
    const decodedTokenInfo = jwt.verify(token, process.env.JWT_SECRET);
    req.userInfo = decodedTokenInfo;

    next(); // ✅ important
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
}
