require("express-async-errors");

const AppError = require("./utils/AppError")

const express = require("express");

const routes = require("./routes/index.js")

const app = express();
app.use(express.json());

app.use(routes);

app.use((error, request, response, next) => {

});

const PORT = 3333;

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));