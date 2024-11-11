const express = require('express')
const router = express.Router()

const {playerController} = require('../Controllers')

router.post('/', playerController.getPlayerByName)

module.exports = router