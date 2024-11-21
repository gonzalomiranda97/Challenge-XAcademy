const express = require('express')
const router = express.Router()

const {playerController} = require('../Controllers')
const { authMiddle } = require('../Middlewares')

router.post('/', authMiddle.userIsAuth, playerController.getPlayerByName)
router.get('/:player_id/exists', playerController.playerExists)
router.get('/:player_id', authMiddle.userIsAuth, playerController.getPlayerById)

module.exports = router