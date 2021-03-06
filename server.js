const express = require('express');


const app = express();

const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(require('./routes/api.js'));
app.use(require('./routes/htmlRoutes.js'));


app.listen(PORT, function() {
  console.log(`Server is listening on PORT: ${PORT}`);
});
