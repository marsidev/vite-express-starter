import { Router } from 'express'
const router = Router()
const { MESSAGE } = process.env

router.get('/', (req, res) => {
  return res.status(200).json({ hello: MESSAGE || 'world' })
})

export default router
