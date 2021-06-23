import {getPeriodeByStatus,getPeriode,getPeriodeById} from "../models/PeriodeModel.js";

// Get All Periode
export const showPeriode = (req, res) => {
    getPeriode((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Get Single Periode from Status
export const showPeriodeByStatus = (req, res) => {
    getPeriodeByStatus(req.params.status, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Get Single Periode from Id
export const showPeriodeById = (req, res) => {
    getPeriodeById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}