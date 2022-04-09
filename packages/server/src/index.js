import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import hello from '#controllers/hello.js'

const app = express()

// middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// routing
app.use('/api/hello', hello)

// serving static files
app.use(express.static('../client/dist'))

// start server
const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

export default app
