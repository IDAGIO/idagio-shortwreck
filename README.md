# @idagio/shortwreck

A nice short wrapper for [Wreck](https://github.com/hapijs/wreck).

## Usage

```js
const ShortWreck = require('@idagio/shortwreck');

const ApiClient = ShortWreck({
  json: true
});

ApiClient.request("GET", "https://httpbin.org/get", (err, res, payload) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(res);
  console.log(payload);
});
```

## API

### `new ShortWreck(options)`

Takes the exact same options as wreck's [`defaults(options)`](https://github.com/hapijs/wreck#basic).

### `ShortWreck.prototype.request(method, uri /*, [options], callback */)`

- `method` - A string specifying the HTTP request method, defaulting to 'GET'.
- `uri` - The URI of the requested resource.
- `options` - Optional config object containing settings for both `request` and
  `read` operations. This will override the options initially passed to `new ShortWreck(options)`.
- `callback` - The callback function using the signature `function (err, response, payload)` where:
    - `err` - Any error that may have occurred during handling of the request.
    - `response` - The [HTTP Incoming Message](http://nodejs.org/api/http.html#http_http_incomingmessage)
       object, which is also a readable stream.
    - `payload` - The payload in the form of a Buffer or (optionally) parsed JavaScript object (JSON).

Returns an instance of the node.js [ClientRequest](http://nodejs.org/api/http.html#http_class_http_clientrequest) object.
