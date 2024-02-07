const express = require("express");
const error = require("./middleware/errorMiddleware");
const found = require("./middleware/notFoundMiddleware");
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Body Parser Middleware
app.use(express.json());

// Init middleware
app.use(error);

app.use("/api/users", require("./routers/usersRoutes"));

app.use("/api/services", require("./routers/servicesRoutes"));

app.use("/api/tours", require("./routers/toursRoutes"));

// Body Parser Middleware
app.use(express.json());

app.use(found);

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
