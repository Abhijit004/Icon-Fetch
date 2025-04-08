const express = require("express")
const Router = express.Router()
const iconController = require("../controllers/iconController")

Router.get("/", iconController.sendIcon)

module.exports = Router