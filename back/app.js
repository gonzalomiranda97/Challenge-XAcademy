const express = require('express')
const app = express()

const PORT = 3000
const {initDB} = require('./Config/dbConfig')

app.get('/', (req, res) => {
    res.send('Hola mundo!')
})

app.listen(PORT, async () => {
    await initDB()
    console.log(`Servidor corriendo en puerto ${PORT}`)
})

app.use(express.json())