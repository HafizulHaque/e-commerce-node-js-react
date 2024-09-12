import express from 'express'
import { 
  loginController, 
  signInController, 
  logoutController 
} from './auth.controller.js'
import { validate } from './auth.validator.js'
import { SignInDto } from './auth.dto.js'

const router = express.Router()

router.post('/login', loginController)
router.post('/signup', validate(SignInDto), signInController)
router.get('/logout', logoutController)

export default router;