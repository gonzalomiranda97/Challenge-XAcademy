const express = require('express')
const app = express()

const PORT = 3000
const {dbConfig} = require('./Config')
const {playercsRouter, clubRouter, fifaVersionRouter} = require('./Routes')
const {errorMiddle} = require('./Middlewares')

app.get('/', (req, res) => {
    res.send('Hola mundo!')
})

app.listen(PORT, async () => {
    await dbConfig.initDB()
    console.log(`Servidor corriendo en puerto ${PORT}`)
})

app.use(express.json())
app.use(errorMiddle)

app.use('/api/playercs', playercsRouter)
app.use('/api/club', clubRouter)
app.use('/api/fifaversion', fifaVersionRouter)
