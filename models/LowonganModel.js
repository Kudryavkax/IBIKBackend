// import connection
import db from "../config/database.js";

// Get All Lowongan
export const getLowongan = (result) => {
    db.query("SELECT * FROM `lowongan` JOIN `perusahaan` ON lowongan.kodept = perusahaan.kodept JOIN `periode` ON lowongan.periode = periode.kodeperiode ORDER BY kodelowongan DESC", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Lowongan
export const getLowonganById = (id, result) => {
    db.query("SELECT * FROM `lowongan` JOIN `perusahaan` ON lowongan.kodept = perusahaan.kodept JOIN `periode` ON lowongan.periode = periode.kodeperiode WHERE kodelowongan = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Lowongan to Database
export const insertLowongan = (data, result) => {
    db.query("INSERT INTO `lowongan` SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Update Lowongan to Database
export const updateLowonganById = (data, id, result) => {
    db.query("UPDATE `lowongan` SET kodept = ?, judul = ?, deskripsi = ?, nmfile = ?, opsi_bulan = ?, opsi_full = ? WHERE kodelowongan = ?", [data.kodept, data.judul, data.deskripsi, data.nmfile, data.opsi_bulan, data.opsi_full, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Delete Lowongan to Database
export const deleteLowonganById = (id, result) => {
    db.query("DELETE FROM `lowongan` WHERE kodelowongan = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}