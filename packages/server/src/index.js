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

// serve the build
const { pathname } = new URL('../../client/dist', import.meta.url)
const root = pathname.slice(1).replace(/%20/g, ' ')
console.log(root)
app.use(express.static(root))
// app.use(express.static('../../client/dist'))

// routing
app.use('/api/hello', hello)

// start server
const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

export default app
