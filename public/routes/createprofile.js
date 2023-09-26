const fb = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all the feedback
fb.get('/pages/createprofile', (req, res) => {
  console.info(`${req.method} request for new profile`);

  readFromFile('./db/profiles.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for submitting new profile
fb.post('/pages/createprofile', (req, res) => {
  console.info(`${req.method} request received to submit new profile`);

  const { email, username, password, confirm, genres,avatar, aboutMe } = req.body;


  if (email && username && password && confirm  && genres && avatar && aboutMe) {
    const newUser = {
      email,
      username,
      password,
      confirm,
      genres,
      avatar,
      aboutMe,
      user_id: uuid(),
    };

    readAndAppend(newUser, './db/profiles.json');

    const response = {
      status: 'success',
      body: newUser,
    };

    res.json(response);
  } else {
    res.json('Error in creating new user');
  }
});

module.exports = fb;
