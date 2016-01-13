node-Strophe
=============

A Node.js compatible version of Strophe.js, borrowed from https://github.com/dhruvbird/node-xmpp-bosh.
This is code mostly identical to Strophe.js release 1.0.2.

Please note: All releases from version v2.0.0 onwards have been modified to work with jsdom 6 for compatibility with Node.js 4.
jsdom 6 is not compatible with Node.js 0.x. If you're working on Node.js 0.x, use the node-Strophe 1.0.1 release.
Also, if you're using jsdom in your own application (for example to load jQuery), the way to use jsdom has been changed. See https://github.com/tmpvar/jsdom.

## Installation

```shell
  npm install node-strophe 
```

## Usage

```js
	// Configuration
	var server = 'bosh.my-server.com';
	var jid = 'user@my-server.com';
	var password = '';

	// Requirements
	var strophe = require("node-strophe").Strophe;
	var Strophe = strophe.Strophe;

	// Set-up the connection
	var BOSH_SERVICE = 'https://' + server + '/http-bind';
	var connection = new Strophe.Connection(BOSH_SERVICE);

	// Log XMPP
	connection.rawInput = connection.rawOutput = console.log;

	// Connect
	connection.connect(jid, password);
```

See http://strophe.im/strophejs/ for more information on how to use Strophe.js.

