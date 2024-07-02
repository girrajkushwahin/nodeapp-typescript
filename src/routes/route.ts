import { Router } from "express";
import { controller1 } from "../controllers/controller.js";

const router1: Router = Router();

router1.get('/', controller1)

export default router1;