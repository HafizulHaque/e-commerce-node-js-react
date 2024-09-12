import { Router } from "express";
import { 
  authRouter 
} from "./modules/index.js";

const router = Router()

router.use('/auth', authRouter)

export default router;