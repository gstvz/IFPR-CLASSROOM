const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('homework.html');
});

router.get('/:id_tarefa', (req, res) => {
    const id_tarefa = req.params.id_tarefa;

    if(id_tarefa == 'tarefa_1'){
        res.render('homework-0.html');
    }
    else{
        res.send('Tarefa não encontrada');
    }
});

module.exports = router;