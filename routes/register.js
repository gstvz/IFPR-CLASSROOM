const express = require('express');
const router = express.Router();
const multer = require('multer');
const db = require('../database/db');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'views/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

router.get('/', (req, res) => {

    const query = `SELECT
                        classroom_name,
                        classroom_id
                    FROM classrooms`;

    function afterConsultData(error, result){
        if(error){
            console.log(error);
            res.send('Erro na consulta');
        }
        else{
            res.render('register.html', { classrooms: result });
        }
    }

    db.all(query, afterConsultData);

});

router.post('/', upload.single('image'), (req, res) => {

    const query = `INSERT INTO user (name, email) VALUES (?,?)`;

    const values = [req.body.name, req.body.email];

    function afterInsertData(error){
        if(error){
            res.send(error);
        }
        else{
            res.render('register.html', { register: true });
        }
    }

    db.run(query, values, afterInsertData);

});

module.exports = router;