const express = require('express')
const router = express.Router()

const {clubController} = require('../Controllers')
const {authMiddle} = require('../Middlewares')

router.post('/', authMiddle.userIsAuth, clubController.getClubByName)
router.get('/:id', authMiddle.userIsAuth, clubController.getClubById)
router.get('/:id/exists', clubController.clubExists)

module.exports = router