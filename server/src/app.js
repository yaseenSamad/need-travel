const express = require('express');
const cors = require("cors");
const emailRoutes = require('./routes/email.routes')
const authMiddleware = require('./middlewares/authentication');


const app = express();


app.use(cors());
app.use(express.json());
app.use("/api",authMiddleware,emailRoutes);

module.exports = app;