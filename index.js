const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('views'));
app.engine('html', ejs.renderFile);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('main.html');
});

app.get('/register', (req, res) => {
    res.render('register.html');
})

app.get('/materias', (req, res) => {
    res.render('subjects.html');
})

app.get('/videos', (req, res) => {
    res.render('videos.html');
})

app.get('/tarefas', (req, res) => {
    res.render('homework.html');
})

app.get('/tarefas/:id_tarefa', (req, res) => {
    const id_tarefa = req.params.id_tarefa;

    if(id_tarefa == 'tarefa_1'){
        res.render('homework-0.html');
    }
    else{
        res.send('Tarefa não encontrada')
    }
})

app.get('/conceitos', (req, res) => {
    res.render('note.html');
})

app.listen(3000, () => {
    console.log('> Server running on port: 3000')
});

