import express from 'express'
import { addAnime, getAnime, getAllAnime } from '../controllers/UserController.js'

const router = express.Router()

router.get('/', getAllAnime)
router.get('/:id', getAnime)
router.post('/', addAnime)

export default router