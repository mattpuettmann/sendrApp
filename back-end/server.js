const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const cors           = require('cors');
const session        = require('express-session')
require('./db/db');







app.listen(process.env.PORT || 9000, () => {
    console.log('listening on port 9000');
  });
