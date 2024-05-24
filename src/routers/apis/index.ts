import express from "express";
import dataRouter from "./DataRouter";


const router = express.Router();

router.use('/data', dataRouter)

export default router;
