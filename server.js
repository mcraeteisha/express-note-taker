// Dependencies
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//app.use(require('./routes/apiRoutes'));
//app.use(require('.routes/htmlRoutes'));

require('./routes/apiRoutes.js')(app);
require('./routes/htmlRoutes.js')(app);

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

