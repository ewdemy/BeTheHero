const express = require("express")
const ongController = require("./controllers/OngController")
const incidentController = require("./controllers/IncidentController")
const profileController = require("./controllers/ProfileController")
const session = require("./controllers/SessionController")

const routes = express.Router()

routes.get("/ongs", ongController.index)
routes.post("/ongs", ongController.create)

routes.get("/profile", profileController.index)

routes.get("/incidents",incidentController.index)
routes.post("/incidents", incidentController.create)
routes.delete("/incidents/:id", incidentController.delete)

routes.post("/sessions", session.create )

module.exports = routes