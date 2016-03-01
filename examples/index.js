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
