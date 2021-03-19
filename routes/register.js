const express = require('express');
const router = express.Router();
const multer = require('multer');

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
    res.render('register.html');
});

router.post('/', upload.single('image'), (req, res) => {
    res.render('register.html', { register: true });
});

module.exports = router;