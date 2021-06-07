import {getLowongan} from "../models/lowonganModel.js";

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