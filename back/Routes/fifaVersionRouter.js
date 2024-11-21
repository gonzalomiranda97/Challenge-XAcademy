const express = require('express')
const router = express.Router()

const {fifaVersionController} = require('../Controllers')
const { authMiddle } = require('../Middlewares')

router.get('/:year', authMiddle.userIsAuth, fifaVersionController.getVersionByYear)
router.get('/:year/exists', fifaVersionController.fifaVersionExists)

module.exports = router