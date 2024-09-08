import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import dotenv from 'dotenv'

const app = express();
dotenv.config()
const PORT = process.env.PORT | 8080
const __dirname = dirname(fileURLToPath(import.meta.url))

// serve static files from frontend
app.use(express.static(path.join(__dirname, '..', 'frontend/dist')))

app.use('/api', (req, res, next) => {
  res.send('Some response from api route')
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend/dist', 'index.html'))
  res.redirect('/')
})

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})