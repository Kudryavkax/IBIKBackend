// import connection
import db from "../config/database.js";

// Get All Absen
export const getAbsen = (result) => {
    db.query("SELECT * FROM `absensi_asisten` ORDER BY tanggal DESC", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Absen by Id
export const getAbsenById = (id, result) => {
    db.query("SELECT * FROM `absensi_asisten` WHERE kodeasisten = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Absen by Tanggal
export const getAbsenByTanggal = (id, id2, result) => {
    var d = id.split("-");
    id = d[2]+'-'+d[0]+'-'+d[1];
    db.query("SELECT * FROM `absensi_asisten` WHERE tanggal = ? AND kodeasisten = ?", [id,Number(id2)], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Absen to Database
export const insertAbsen = (data, result) => {
    db.query("INSERT INTO `absensi_asisten` SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Update Absen to Database
export const updateAbsenById = (data, id, result) => {
    db.query("UPDATE `absensi_asisten` SET kegiatan = ?, jam_mulai = ?, jam_selesai = ?, durasi = ? WHERE tanggal = ?", [data.kegiatan, data.jam_mulai, data.jam_selesai, data.durasi, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Delete Absen to Database
export const deleteAbsenById = (id, result) => {
    db.query("DELETE FROM `absensi_asisten` WHERE tanggal = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}