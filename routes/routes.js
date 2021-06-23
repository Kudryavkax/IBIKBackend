// import express
import express from "express";
 
// import function from controller
import {showPengumuman,showPengumumanById,createPengumuman,updatePengumuman,deletePengumuman} from "../controllers/pengumuman.js";
import {showLowongan,showLowonganById,createLowongan,deleteLowongan,updateLowongan} from "../controllers/lowongan.js";
import {createAbsen,deleteAbsen,showAbsen,showAbsenById,updateAbsen,showAbsenByTanggal} from "../controllers/absensi.js";
import {showPeriodeByStatus,showPeriode,showPeriodeById} from "../controllers/periode.js";

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

//Absen--------------------------
// Get All Absen
router.get('/absen', showAbsen);

// Get Absen by ID
router.get('/absenid/:id', showAbsenById);

// Get Absen by Tanggal
router.get('/absen/:id/:id2', showAbsenByTanggal);
 
// Create New Absen
router.post('/absen', createAbsen);
 
// Update Absen
router.put('/absen/:id', updateAbsen);
 
// Delete Absen
router.delete('/absen/:id', deleteAbsen);
//-------------------------------

//Periode------------------------
//Get Periode
router.get('/periode', showPeriode);

//Get Periode by Status
router.get('/periode/status/:status', showPeriodeByStatus);

//Get Periode by Id
router.get('/periode/id/:id', showPeriodeById);
//-------------------------------
// export default router
export default router;