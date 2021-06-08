// import express
import express from "express";
 
// import function from controller
import {showPengumuman,showPengumumanById,createPengumuman,updatePengumuman,deletePengumuman} from "../controllers/pengumuman.js";
import {showLowongan,showLowonganById,createLowongan,deleteLowongan,updateLowongan} from "../controllers/lowongan.js";

// init express router
const router = express.Router();
//Pengumuman --------------------
// Get All Pengumuman
router.get('/pengumuman', showPengumuman);

// Get Pengumuman
router.get('/pengumuman/:id', showPengumumanById);
 
// Create New Pengumuman
router.post('/pengumuman', createPengumuman);
 
// Update Pengumuman
router.put('/pengumuman/:id', updatePengumuman);
 
// Delete Pengumuman
router.delete('/pengumuman/:id', deletePengumuman);
//-------------------------------
//Lowongan-----------------------
// Get All Lowongan
router.get('/lowongan', showLowongan);

// Get Lowongan
router.get('/lowongan/:id', showLowonganById);
 
// Create New Lowongan
router.post('/lowongan', createLowongan);
 
// Update Lowongan
router.put('/lowongan/:id', updateLowongan);
 
// Delete Lowongan
router.delete('/lowongan/:id', deleteLowongan);
//-------------------------------
// export default router
export default router;