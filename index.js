const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const cookieParser = require("cookie-parser");
const PORT = 3000;
const path = require("path");

app.use(express.json()); // <- Parses Json data
app.use(express.urlencoded({ extended: true, limit: "500mb" })); // <- Parses URLencoded data

dotenv.config();
app.enable("trust proxy");
app.use(cors());
app.use(cookieParser());
app.use(morgan("dev")); // <- Logs res status code and time taken
app.use(express.static(__dirname + "/public"));

// Routers for app
const iconRouter = require("./routes/iconRoutes");


// setting Routes
app.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "views", "index.html"));
});
app.use("/api/v1/", iconRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
