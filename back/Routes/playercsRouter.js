const express = require('express')
const router = express.Router()

const {playercsController} = require('../Controllers')

router.get('/:id', playercsController.getPlayerCSById)
router.get('/playerid/:id', playercsController.getPlayerCSByPlayerId)
router.get('/clubid/:id', playercsController.getPlayerCSByClubId)

module.exports = router