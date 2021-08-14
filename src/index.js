const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/', [
  require('./routes/UserRoute'),
])

app.listen(3333, () => console.log('Listening on the port 3333'))

exports.app = app