import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import hello from '#controllers/hello'

const PORT = 5000
const app = express()

// middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// serving static files
app.use(express.static('../client/dist'))

// routing
app.use('/api/hello', hello)

app.listen(PORT, () => console.log(`server running on port ${PORT}`))

export default app
