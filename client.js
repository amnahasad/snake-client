
const net = require("net"); //creates the client object/connection

const name = 'Name: AA';
// establishes a connection with the game server
const connect = function () {
    const conn = net.createConnection({
        host: '165.227.47.243', // IP address here,
        port: 50541 // PORT number here,
    });

    conn.write(`${name}`);
    // interpret incoming data as text
    conn.setEncoding("utf8");

    conn.on("connect", (data) => {
        // code that does something when the connection is first established
        console.log("Successfully connected to game server");
    });

    conn.on("connect", () => {
        // code that does something when the connection is first established
        console.log("Connected!!");
    });
    return conn;
};

module.exports = connect;