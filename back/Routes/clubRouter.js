const express = require('express')
const router = express.Router()

const {clubController} = require('../Controllers')
const {authMiddle} = require('../Middlewares')
//authMiddle.userIsAuth
router.post('/', clubController.getClubByName)
router.get('/:id', clubController.getClubById)
router.get('/:id/exists', clubController.clubExists)

module.exports = router