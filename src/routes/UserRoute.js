const express = require('express')

const routes = express.Router()
const UserController = require('../controllers/UserController')

// User Routes
routes.get('/matchesByFaceiId/:faceitId', UserController.getMatchesHistory)

module.exports = routes
