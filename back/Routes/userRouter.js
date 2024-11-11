const express = require('express')
const router = express.Router()

const {userController} = require('../Controllers')

router.post('/', userController.getUserByEmail)
router.post('/create', userController.createUser)

module.exports = router