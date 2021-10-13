const express = require('express')
const notes = require('./data/notes')
const morgan = require('morgan')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const useRoutes = require('./routes/userRoutes')

const app = express()

app.use(morgan('tiny'))

dotenv.config()
connectDB()
// app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running')
})

// app.get('/api/notes', (req, res) => {
//   res.send(notes)
// })
// app.get('/api/notes/:id', (req, res) => {
//   const note = notes.find((n) => n._id === req.params.id)
//   res.send(note)
// })

app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started on PORT: ${PORT}`))
