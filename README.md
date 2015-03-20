node-Strophe
=============

A Node.js compatible version of Strophe.js, borrowed from https://github.com/dhruvbird/node-xmpp-bosh.

## Installation

```shell
  npm install node-strophe 
```

## Usage

```js
	var strophe = require("node-strophe").Strophe;
	var Strophe = strophe.Strophe;

	var BOSH_SERVICE = 'https://server/http-bind';
	var connection = new Strophe.Connection(BOSH_SERVICE);
```

See http://strophe.im/strophejs/ for more information on how to use Strophe.js.

