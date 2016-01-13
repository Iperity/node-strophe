// Configuration
var server = 'bosh.my-server.com';
var jid = 'user@my-server.com';
var password = '';

// Requirements
var strophe = require("./strophe.js").Strophe;
var Strophe = strophe.Strophe;

// Set-up the connection
var BOSH_SERVICE = 'https://' + server + '/http-bind';
var connection = new Strophe.Connection(BOSH_SERVICE);

// Log XMPP
connection.rawInput = connection.rawOutput = console.log;

// Connect
connection.connect(jid, password);
