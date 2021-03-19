const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const app = express();
const router = express.Router();

app.use(express.static('views'));
app.engine('html', ejs.renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

nunjucks.configure('./views', {
    express: app,
    noCache: true
});

const loginRoute = require('./routes/login');
app.use('/', loginRoute);

const registerRoute = require('./routes/register');
app.use('/register', registerRoute);

const homeworkRoute = require('./routes/homework');
app.use('/tarefas', homeworkRoute);

const videosRoute = require ('./routes/videos');
app.use('/videos', videosRoute);

const materiasRoute = require('./routes/materias');
app.use('/materias', materiasRoute);

const conceitosRoute = require('./routes/conceitos');
app.use('/conceitos', conceitosRoute);

app.listen(3000, () => {
    console.log('> Server running on port: 3000')
});

