// import connection
import db from "../config/database.js";

// Get All Pengumuman
export const getPengumuman = (result) => {
    db.query("SELECT * FROM `pengumuman` ORDER BY noP DESC", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Pengumuman
export const getPengumumanById = (id, result) => {
    db.query("SELECT * FROM `pengumuman` WHERE noP = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Pengumuman to Database
export const insertPengumuman = (data, result) => {
    db.query("INSERT INTO `pengumuman` SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Update Pengumuman to Database
export const updatePengumumanById = (data, id, result) => {
    db.query("UPDATE `pengumuman` SET judul = ?, isi = ?, nmfile = ? WHERE noP = ?", [data.judul, data.isi, data.nmfile, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Delete Pengumuman to Database
export const deletePengumumanById = (id, result) => {
    db.query("DELETE FROM `pengumuman` WHERE noP = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}