const express = require('express')
const router = express.Router()

const {clubController} = require('../Controllers')

router.post('/', clubController.getClubByName)

module.exports = router