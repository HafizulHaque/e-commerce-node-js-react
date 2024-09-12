import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import dotenv from 'dotenv'

import apiRouter from './apiRoutes.js'


const app = express();
dotenv.config()
const PORT = process.env.PORT | 8080
const __dirname = dirname(fileURLToPath(import.meta.url))

// to parse json request body
app.use(express.json());

// serve static files from frontend
app.use(express.static(path.join(__dirname, '..', 'frontend/dist')))

app.use('/api', apiRouter)

app.get('*', (req, res) => {
  // res.sendFile(path.join(__dirname, '..', 'frontend/dist', 'index.html'))
  // res.redirect('/')
  res.json({msg: 'xyz'})
})

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})