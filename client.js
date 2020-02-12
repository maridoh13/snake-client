const net = require('net');

const connect = () => {
  const conn = net.createConnection({ 
    host: '192.168.88.177',
    port: 50541
  });

  conn.setEncoding('utf8'); 

  conn.on('data', (data) => { //Listens to data from server
    console.log('Server says', data);
  });

  conn.on('connect', () => {
    console.log('I\'m in the Matrix.'); //upon connection
    conn.write("Name: MCD");            //sends to server

  });
  
  return conn;
}



module.exports = { connect };