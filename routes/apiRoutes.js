// LOAD DATA
const noteData = require('db/db.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// ROUTING

module.exports = (app) => {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------
  app.get('/api/notes', (req, res) => {
    fs.readFile('db.json', 'utf8', function(err, data) {
      if (err) throw err;
      console.log(data);
    });
    res.json(noteData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = uuidv4();

    console.log(newNote);

    fs.writeFileSync('db.json', newNote, newNote.id);

    noteListItems.push(newNote);
    res.json(newNote);
  });
};

