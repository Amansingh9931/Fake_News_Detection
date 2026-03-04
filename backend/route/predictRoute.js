import express from "express";
import { predictNews } from "../controller/predictController.js";

const router = express.Router();

router.post("/predict", predictNews);

export default router;