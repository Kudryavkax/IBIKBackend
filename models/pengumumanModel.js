// import connection
import db from "../config/database.js";

// Get All Pengumuman
export const getPengumuman = (result) => {
    db.query("SELECT * FROM `pengumuman` ORDER BY tanggal DESC", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}