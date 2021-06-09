import {getAbsen,getAbsenById,deleteAbsenById,insertAbsen,updateAbsenById,getAbsenByTanggal} from "../models/absensiModel.js";

// Get All Absen
export const showAbsen = (req, res) => {
    getAbsen((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Get Single Absen by Id
export const showAbsenById = (req, res) => {
    getAbsenById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Get Single Absen by Tanggal
export const showAbsenByTanggal = (req, res) => {
    getAbsenByTanggal(req.params.id,req.params.id2, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Create New Absen
export const createAbsen = (req, res) => {
    const data = req.body;
    insertAbsen(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

 
// Update Absen
export const updateAbsen = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateAbsenById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Delete Absen
export const deleteAbsen = (req, res) => {
    const id = req.params.id;
    deleteAbsenById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}