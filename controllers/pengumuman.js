import {getPengumuman, getPengumumanById, insertPengumuman, updatePengumumanById, deletePengumumanById} from "../models/PengumumanModel.js";

// Get All Pengumuman
export const showPengumuman = (req, res) => {
    getPengumuman((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Get Single Pengumuman
export const showPengumumanById = (req, res) => {
    getPengumumanById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New Pengumuman
export const createPengumuman = (req, res) => {
    const data = req.body;
    insertPengumuman(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

 
// Update Pengumuman
export const updatePengumuman = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updatePengumumanById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Delete Pengumuman
export const deletePengumuman = (req, res) => {
    const id = req.params.id;
    deletePengumumanById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}