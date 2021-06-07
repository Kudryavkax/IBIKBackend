// import express
import express from "express";
 
// import function from controller
import {showPengumuman} from "../controllers/pengumuman.js";
import {showLowongan} from "../controllers/lowongan.js";

// init express router
const router = express.Router();

// Get All Pengumuman
router.get('/pengumuman', showPengumuman);

// Get All Lowongan
router.get('/lowongan', showLowongan);

// export default router
export default router;