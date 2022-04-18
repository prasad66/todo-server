const express = require('express');
const dotenv = require('dotenv');

const cors = require('cors');
const app = express();
const router = require('./routes/routes');

app.use(express.json());
app.use(cors());
dotenv.config();
require('./models/db');

const PORT = process.env.PORT || 5000


app.use('/api/tasks', router);

app.listen(PORT, (err) => {

    if (err) { console.log(err); }
    else { console.log(`Server is listening on port ${PORT}`); }
})