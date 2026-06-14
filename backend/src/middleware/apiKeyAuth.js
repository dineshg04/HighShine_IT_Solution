const apiKeyAuth = (req, res, next) => {
  const clientKey = req.headers["x-api-key"];

  if (!clientKey) {
    return res.status(401).json({
      success: false,
      error: "Missing API key. Provide it in the x-api-key header.",
    });
  }

  if (clientKey !== process.env.API_KEY) {
    return res.status(403).json({
      success: false,
      error: "Invalid API key.",
    });
  }

  next();
};

module.exports = apiKeyAuth;