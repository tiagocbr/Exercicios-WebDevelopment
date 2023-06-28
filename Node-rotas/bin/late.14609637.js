'use strict'

const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express')
const bodyParser = require('body-parser');

//Inicializando array
let array = [
    {
        id: 1,
        title: 'First',
        content: 'firstcontent',
        author: 'firstAuthor'
    },
    {

        id: 2,
        title: 'Second',
        content: 'Secondcontent',
        author: 'SecondAuthor'

    },
    {

        id: 3,
        title: 'Third',
        content: 'Thirdcontent',
        author: 'ThirdAuthor'

    },
    {

        id: 4,
        title: 'fOURTHt',
        content: 'fOURTHtcontent',
        author: 'fOURTHtAuthor'

    },
    {

        id: 5,
        title: 'Last',
        content: 'Lastcontent',
        author: 'LastAuthor'

    }
]

//Definindo app
const app = express();

//Carrega as Rotas
const router = express.Router();
const rota = router.get('/', (req, res, next) => {
    res.status(200).send(array)
});
rota.get('/:id', (req, res, next) => {

    if (!req.params.hasOwnProperty('id')) {
        res.status(200).send(array)
    }
    else {
        const id = req.params.id;
        if (array.filter(element => element.id == id).length > 0) {
            res.status(200).send(array.filter(element => element.id == id))
        }
        else {
            console.log('This Id is not valid');
            res.status(404).send('This Id is not valid');
        }
    }

});

rota.post('/', (req, res, next) => {
    array.push(req.body);
    res.status(200).send(array);
});

rota.put('/:id', (req, res, next) => {
    const id = req.params.id;
    let arrayFiltrado = array.filter(element => element.id == id);

    if (arrayFiltrado.length > 0) {

        array.map((element, index) => {
            if (element.id == id) {
                array[index] = req.body
            }
        })
        res.status(200).send(array)
    }
    else {
        console.log('This Id is not valid');
        res.status(404).send('This Id is not valid');
    }

})

rota.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    let arrayFiltrado = array.filter(element => element.id == id);
    let newArray = [];
    if (arrayFiltrado.length > 0) {

        array.map((element, index) => {
            if (element.id != id) {
                newArray.push(array[index]);
            }
        })
        newArray.map((element, index) => {
            array[index] = newArray[index];
        })
        array.pop();

        res.status(200).send(array)
    }
    else {
        console.log('This Id is not valid');
        res.status(404).send('This Id is not valid');
    }

})

//End-Carrega as rotas

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    const currentDate = new Date().toUTCString();
    console.log(`[${currentDate}] ${req.method} ${req.url}`);
    next();
});

app.use('/posts', rota);

//End-Definindo app

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges')
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

console.log('API rodando na porta ' + port);