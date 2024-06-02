const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const bcrypt = require('bcrypt'); // For password hashing

const app = express();
const port = 3000;

// Replace with your MongoDB connection details
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://korirbrian222:ns4VxdQhLmbxqMA2@korir.laharav.mongodb.net/?retryWrites=true&w=majority&appName=Korir";


MongoClient.connect(uri, (err, client) => {
  if (err) {
    console.error(err);
    return;
  }
  db = client.db("Korir");
  console.log("Connected to MongoDB");
});

app.use(bodyParser.json()); // Parse JSON data

// Registration route
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Validate username and password (on server-side)

  // Hash password securely
  const saltRounds = 10; // Adjust salt rounds as needed
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  try {
    const result = await db.collection('users').insertOne({
      username,
      password: hashedPassword,
    });
    res.status(201).json({ message: 'User created successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating user' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});




function showRegister() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("register-form").style.display = "block";
}

function hideRegister() {
  document.getElementById("login-form").style.display = "block";
  document.getElementById("register-form").style.display = "none";
}

function showForgotPassword() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("forgot-password-form").style.display = "block";
}

function hideForgotPassword() {
  document.getElementById("login-form").style.display = "block";
  document.displaygetElementById("forgot-password-form").style.display = "none"; // Corrected line
}
function rememberMe() {
  const rememberMeCheckbox = document.getElementById("remember-me");
  // Logic to store or retrieve login credentials based on checkbox state (consider security!)
}

