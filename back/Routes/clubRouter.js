const express = require('express')
const router = express.Router()

const {clubController} = require('../Controllers')
const {authMiddle} = require('../Middlewares')

router.post('/', authMiddle.userIsAuth, clubController.getClubByName)

module.exports = router