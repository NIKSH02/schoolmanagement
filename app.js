const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express")
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config();
const schoolRoutes = require('./routes/school.js');

app.use('/', schoolRoutes);

app.use(express.urlencoded({extended : true}));
app.use(express.json());



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
