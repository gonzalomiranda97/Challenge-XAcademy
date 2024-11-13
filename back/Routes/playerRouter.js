const express = require('express')
const router = express.Router()

const {playerController} = require('../Controllers')

router.post('/', playerController.getPlayerByName)
router.get('/:player_id/exists', playerController.playerExists)

module.exports = router