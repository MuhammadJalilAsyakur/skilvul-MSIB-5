const express = require('express');
const app = express();


const PORT = process.env.PORT || 3000;

const db = require('./config/db');
const allRoutes = require('./routes');

db.then(() => console.log('Database connected'))
    .catch((err) => console.log(err));

app.use(express.json());
app.use(allRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})