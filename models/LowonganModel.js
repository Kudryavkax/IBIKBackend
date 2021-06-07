// import connection
import db from "../config/database.js";

// Get All Lowongan
export const getLowongan = (result) => {
    db.query("SELECT * FROM `lowongan` JOIN `perusahaan` ON lowongan.kodept = perusahaan.kodept ORDER BY kodelowongan DESC", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}