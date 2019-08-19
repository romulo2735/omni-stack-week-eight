const express = require('express');
const mongoose = require('mongoose');
const io = require('socket.io')(server);
const cors = require('cors');

const routes = require('./routes');

const httpServer = express();
const server = require('http').Server(httpServer);

io.on('connection', socket => {
  
});

// MongoDB
mongoose.connect('mongodb+srv://romulo:romulo@cluster-test-agcll.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

httpServer.use(cors());
httpServer.use(express.json());
httpServer.use(routes);

server.listen(3333);