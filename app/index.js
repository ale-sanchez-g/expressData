const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

let port = process.env.PORT || 3000;

const data = require('./data.json');
const slackMardown = require('./slackMardown.json');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(cors())

app.get('/', function ( req, res ) {
    res.send("Welcome to DATA POC")
})

app.get('/health', function ( req, res ) {
    res.send("ok")
})

app.post('/', function ( req, res ) {
    
    switch(req.body.text) {
        case "SIMO":
        case 'simo':
            console.log('Go and get me some SIMO data mate');
            res.send(data.SIMO);
            break;
        case 'HANDSET':
        case 'handset':
            console.log('Go and get me some HANDSET data mate');
            res.send(data.HANDSET);
            break;
        case 'USERNAME':
        case 'username':
            console.log('Go and get me some USERNAME data mate');
            res.send(data.USERNAME);
            break;   
        case 'linked_service':
        case 'LINKED_SERVICE':
        case 'linkedservice':
        case 'LinkedService':
        case 'linkedService':
            console.log('Go and get me some Linked Services  data mate');
            res.send(data.LINKED_SERVICES);
            break;   
        default:
            console.log('Go and get me the FULL DATA LIST mate');
            res.send(slackMardown);
      }
})

app.listen(port);
