const express = require('express')
const router = express.Router()

const {playercsController} = require('../Controllers')
const { authMiddle } = require('../Middlewares')

router.get('/:id', authMiddle.userIsAuth, playercsController.getPlayerCSById)
router.get('/playerid/:id', playercsController.getPlayerCSByPlayerId)
router.get('/clubid/:id', playercsController.getPlayerCSByClubId)
router.post('/create', authMiddle.userIsAdmin, playercsController.createPlayerCS)
router.post('/edit', authMiddle.userIsAdmin, playercsController.editPlayerCS)
router.post('/position', authMiddle.userIsAuth, playercsController.getPlayerCSByPositions)

module.exports = router