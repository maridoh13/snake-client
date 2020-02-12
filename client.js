const net = require('net');
const { IP, PORT } = require('./constants');

const connect = () => {
  const conn = net.createConnection({ host: IP, port: PORT });

  conn.setEncoding('utf8'); 

  conn.on('data', (data) => { //Listens to data from server
    console.log('Server says', data);
  });

  conn.on('connect', () => {
    console.log('I\'m in the Matrix.'); //upon connection
    conn.write("Name: MCD");            //sends to server
    conn.write("Say: I\'m hungry!");
  });
  
  return conn;
}



module.exports = { connect };