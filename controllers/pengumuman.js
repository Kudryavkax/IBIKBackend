import {getPengumuman} from "../models/PengumumanModel.js";

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