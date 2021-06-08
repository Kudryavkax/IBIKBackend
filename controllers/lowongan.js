import {getLowongan,getLowonganById,deleteLowonganById,insertLowongan,updateLowonganById} from "../models/lowonganModel.js";

// Get All Lowongan
export const showLowongan = (req, res) => {
    getLowongan((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Get Single Lowongan
export const showLowonganById = (req, res) => {
    getLowonganById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Create New Lowongan
export const createLowongan = (req, res) => {
    const data = req.body;
    insertLowongan(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

 
// Update Lowongan
export const updateLowongan = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateLowonganById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Delete Lowongan
export const deleteLowongan = (req, res) => {
    const id = req.params.id;
    deleteLowonganById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}