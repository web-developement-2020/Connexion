const express = require('express');
const app = express();
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

//Body parser configuration
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

//First route
app.get('/', (req, res) => res.send('Hello'));

//Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = 7200;
app.listen(port, () => console.log(`Server running on port ${port}`));

//Db config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDb Connected"))
  .catch((err) => console.log(err));
