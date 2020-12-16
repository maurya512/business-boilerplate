import express from 'express'
const router = express.Router()
import { authUser, getUserProfile, registerUser } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(registerUser)
router.post('/login', authUser)
// protect middleware protects the main route of the user
router.route('/profile').get(protect, getUserProfile)

export default router