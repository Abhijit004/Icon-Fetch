const app = require("../app");
const PORT = 3000;
const serverless = require('serverless-http');

module.exports = serverless(app);
