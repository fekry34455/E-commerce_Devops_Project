const healthCheck = async (req, res) => {
  res.status(200).json({
    status: "success",
    message: "API is healthy",
  });
};

const healthError = async (req, res) => {
  throw new Error("Async error test");
};

module.exports = {
  healthCheck,
  healthError,
};
