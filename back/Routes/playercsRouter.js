const express = require('express')
const router = express.Router()

const {playerController} = require('../Controllers')

router.get('/:id', playerController.getPlayerCSById)
router.get('/playerid/:id', playerController.getPlayerCSByPlayerId)
router.get('/clubid/:id', playerController.getPlayerCSByClubId)

module.exports = router