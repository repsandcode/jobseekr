import express from "express";

import authRoute from "./authRoutes.js";
import userRoute from "./userRoutes.js";
import companiesRoute from "./companiesRoutes.js";
import jobsRoutes from "./jobsRoutes.js";

const router = express.Router();

const path = "/api-v1/";

router.use(`${path}auth`, authRoute); //api-v1/auth
router.use(`${path}users`, userRoute);
router.use(`${path}companies`, companiesRoute);
router.use(`${path}jobs`, jobsRoutes);

export default router;
