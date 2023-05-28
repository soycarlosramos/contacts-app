import { Router } from 'express'
const router = Router()


import index from '../controllers/index.js'

router.get('/', index)

export default router