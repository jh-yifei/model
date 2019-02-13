const express = require('express');
const config = require('./config/index');

const port = process.env.PORT || config.build.port;

const app = express();

const router = express.Router();

router.get('/', function(req, res, next) {
  req.url = '/index.html';
  next();
});

app.use(router);

app.use(express.static('./dist'));

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('listening at http://127.0.0.1:' + port + ' ...');
});
