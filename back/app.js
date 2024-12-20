const express = require('express')
const app = express()

const PORT = 3000
const {dbConfig} = require('./Config')
const {playercsRouter, clubRouter, fifaVersionRouter, playerRouter, userRouter, loginRouter} = require('./Routes')
const {errorMiddle} = require('./Middlewares')
const cors = require('cors')

app.get('/', (req, res) => {
    res.send('Hola mundo!')
})

app.listen(PORT, async () => {
    await dbConfig.initDB()
    console.log(`Servidor corriendo en puerto ${PORT}`)
})

app.use(express.json())
app.use(errorMiddle)
app.use(cors())

app.use('/api/playercs', playercsRouter)
app.use('/api/club', clubRouter)
app.use('/api/fifaversion', fifaVersionRouter)
app.use('/api/player', playerRouter)
app.use('/api/user', userRouter)
app.use('/api/login', loginRouter)
