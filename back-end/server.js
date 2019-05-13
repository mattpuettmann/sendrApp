const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const cors           = require('cors');
const session        = require('express-session')
require('./db/db');

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200
  }

app.use(cors(corsOptions));

app.use(session({
    secret: 'mashed potatoes',
    resave: false,
    saveUninitialized: false
  }));

app.use(bodyParser.json());

const authController = require('./Controllers/authController');
const userController = require('./Controllers/userController');

app.use('/auth', authController);
app.use('/api/v1/users', userController);



app.listen(process.env.PORT || 9000, () => {
    console.log('listening on port 9000');
  });
