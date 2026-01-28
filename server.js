require("dotenv").config();

const express = require("express");

const app = express();
// Middleware
app.use(express.json());


// Test route
app.get("/", (req, res) => {
  res.send("Server is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// const dbConnection = require("./config/database");
// dbConnection();
const healthRoute = require("./routes/health.routes");
app.use("/api/health", healthRoute);

const errorHandler = require("./middlewares/error.middleware");

// Error handler (لازم آخر حاجة)
app.use(errorHandler);
