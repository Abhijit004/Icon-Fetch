const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const cookieParser = require("cookie-parser");
const PORT = 3000;

app.use(express.json()); // <- Parses Json data
app.use(express.urlencoded({ extended: true, limit: "500mb" })); // <- Parses URLencoded data

dotenv.config();
app.enable("trust proxy");
app.use(cors());
app.use(cookieParser());
app.use(morgan("dev")); // <- Logs res status code and time taken

app.use((req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    next();
});
// Routers for app
const iconRouter = require("./routes/iconRoutes");

// setting Routes
app.use("/icon/v1/", iconRouter);
app.get("/", (req, res) => res.send("Express on Vercel, Icons generator app"));

// 404 middleware: Catch unmatched routes
app.use((req, res, next) => {
    res.status(404).json({ error: "Route not found" });
});

// 500 middleware: Catch internal server errors
app.use((err, req, res, next) => {
    console.error("Server Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
});

app.get("/favicon.ico", (req, res) => res.status(204).end());

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

module.exports = app;
