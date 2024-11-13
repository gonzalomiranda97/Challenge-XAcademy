const express = require('express')
const router = express.Router()

const {fifaVersionController} = require('../Controllers')

router.get('/:year', fifaVersionController.getVersionByYear)
router.get('/:year/exists', fifaVersionController.fifaVersionExists)

module.exports = router