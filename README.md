# YYID for JavaScript (Node) [![[travis]](https://travis-ci.org/janlelis/yyid-node.js.svg)](https://travis-ci.org/janlelis/yyid-node.js)

- Generates a [UUID#4](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_.28random.29)-like random string, but in contrast to [RFC 4122](https://tools.ietf.org/rfc/rfc4122.txt), omits the static bits
- Format: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` (128bit randomness)
- Use a crytographically solid source of randomness: [crypto.randomBytes](http://nodejs.org/api/crypto.html#crypto_crypto_randombytes_size_callback)
- See [yyid.js](https://github.com/janlelis/yyid.js) for a front-end (browser) version

## Install

```
$ npm install yyid-node
```

## Usage

```javascript
var yyid = require('yyid-node');
yyid(); // => '5ebd4295-92a2-c98b-9103-b1e5d16f2bfa'
```

## Other Versions

[YYID](https://github.com/micromodules/yyid) is available for more languages, such as Ruby, Elixir, and Rust.
