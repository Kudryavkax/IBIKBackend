// import connection
import db from "../config/database.js";

// Get All Periode
export const getPeriode = (result) => {
    db.query("SELECT * FROM `periode` ORDER BY kodeperiode DESC", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Periode by status_jalan
export const getPeriodeByStatus = (status, result) => {
    db.query("SELECT * FROM `periode` WHERE status_jalan = ?", [status], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

// Get Periode by id
export const getPeriodeById = (id, result) => {
    db.query("SELECT * FROM `periode` WHERE kodeperiode = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}