
const net = require("net"); //creates the client object/connection

const name = 'Name: AA';
// establishes a connection with the game server
const connect = function () {

    const name = 'Name: AA';
    const up = 'Move: up';
    const down = 'Move: down';
    const right = 'Move: right';
    const left = 'Move: left';

    const conn = net.createConnection({
        host: '165.227.47.243', // IP address here,
        port: 50541 // PORT number here,
    });

    // interpret incoming data as text
    conn.setEncoding("utf8");
    conn.write(`${name}`);

    setInterval(() => {
        conn.write(`${up}`)}, 3000);

    setInterval(() => {
        conn.write(`${down}`)}, 3000);

    setInterval(() => {
        conn.write(`${right}`)}, 3000);

    setInterval(() => {
        conn.write(`${left}`)}, 3000);


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