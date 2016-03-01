var Wreck = require('wreck');

function ShortWreck(options) {
  if (!(this instanceof ShortWreck)) {
    return new ShortWreck(options);
  }

  this.client = Wreck.defaults(options);
}

ShortWreck.prototype.request = function request(method, uri /*, [options], callback */) {
  const options = (typeof arguments[2] === 'function' ? {} : arguments[2]);
  const callback = (typeof arguments[2] === 'function' ? arguments[2] : arguments[3]);

  return this.client.request(method, uri, options, (err, res) => {
    if (err) {
      return callback(err);
    }

    this.client.read(res, options, (err, payload) => {
      return callback(err, res, payload);
    });
  });
};

module.exports = ShortWreck;
