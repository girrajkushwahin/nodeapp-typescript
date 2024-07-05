import { Router } from "express";
import { controller1, controller2 } from "../controllers/controller.js";

const router1: Router = Router();

router1.get('/', controller1);
router1.get('/db', controller2);

export default router1;