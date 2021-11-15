const { connect } = require("./client");
const { setupInput } = require('./input');

//This will serve as your main file through which you will launch the game client.
const net = require("net"); //creates the client object/connection

console.log("Connecting ...");
setupInput(connect());
