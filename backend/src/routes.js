const express = require("express")
const ongController = require("./controllers/OngController")
const incidentController = require("./controllers/IncidentController")
const profileController = require("./controllers/ProfileController")
const session = require("./controllers/SessionController")
const {celebrate, Segments, Joi} = require("celebrate")

const routes = express.Router()

routes.get("/ongs", ongController.index)

routes.post("/ongs",celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), ongController.create)

routes.get("/profile", celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown()}), profileController.index)

routes.get("/incidents",incidentController.index)
routes.post("/incidents", incidentController.create)
routes.delete("/incidents/:id", incidentController.delete)

routes.post("/sessions", session.create )

module.exports = routes