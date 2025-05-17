const express = require('express');
const path = require('path');
const mysql = require('mysql');
const cors = require('cors');
const { info } = require('console');
require('dotenv').config();


const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password:process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database.');
});


// style for backend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'serverrunning.html'));
});

// loginpage for encription
app.get('/data1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});


// redirecting to data for info
app.get('/data',(req,res) => {
  const sql = 'SELECT * FROM contacts2';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching data: ' + err);
      res.status(500).send('Error fetching data from database');
      return;
    }
    
    res.json(results); 
  });
})


// style for showing data
app.get('/datapage', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'datastyle.html'));
});


// for portfolio submition
app.post('/submit-form', (req, res) => {
  const { name, email, subject, message } = req.body;

  const sql = 'INSERT INTO contacts2 (name, email, subject, message) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, email, subject, message], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).json({ success: false, error: 'Database error' });
    }
    res.status(200).json({ success: true, message: 'Form submitted successfully!' });
  });
});


// listening
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
