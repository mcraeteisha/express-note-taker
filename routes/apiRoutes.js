// LOAD DATA
const fs = require('fs');

//Creating a function to read db.json file
const readNotes = () => {
  let noteEntries = fs.readFileSync('db/db.json', 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
  });

  let notes = JSON.parse(noteEntries);

  for (let i = 0; i < notes.length; i++) {
    notes[i].id = '' + i;
}

  return notes;

}


// ROUTING
module.exports = (app) => {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link they are shown a JSON of the data in db.json)
  // ---------------------------------------------------------------------------
  app.get('/api/notes', (req, res) => {
    noteData = readNotes();
    res.json(noteData);
  });

  // API POST Requests
  // Below code handles when a user submits a note and thus submits data to the server.
  app.post('/api/notes', (req, res) => {
    //noteData = readNotes();
    noteData.push(req.body);
    fs.writeFileSync('./db/db.json', JSON.stringify(noteData), 'utf8');
    res.json(true);
  });
};

