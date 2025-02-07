const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
const mongoose = require("mongoose");
const User = require("./schema.js"); 


mongoose.connect("mongodb://127.0.0.1:27017/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("Connection error", err));


const testUserSchema = async () => {
  try {
    const newUser = new User({
      username: "Dhanya",
      email: "Dhanya@laks.com",
      password: "dhanya@123456789",
      profile: {
        firstName: "Dhanya",
        lastName: "Lakshmi",
        age: 25
      }
    });

    await newUser.save();
    console.log("User saved successfully:", newUser);
  } catch (error) {
    console.error("Error saving user:", error);
  }
};


testUserSchema();