const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require("./models/user");
const Item = require("./models/item");
const bcrypt = require("bcryptjs");
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// MongoDB connection
mongoose
  .connect("mongodb://localhost/shopbit", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB: ", err));

// Routes

// Home Route
app.get("/", (req, res) => {
  res.render("index");
});

// Register Route
app.post("/register", async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).send("User already exists");
    }

    user = new User({ fullName, email, password });
    await user.save();

    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// Login Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send("Invalid credentials");
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).send("Invalid credentials");
    }

    // Here, you could implement session or JWT for logged in users
    res.redirect("/shopbit");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// Shopbit Route
app.get("/shopbit", async (req, res) => {
   try {
     const items = await Item.find(); // Fetch items from the database
     console.log(items);
     res.render("shopbit", { items });
   } catch (err) {
     console.log(err);
     res.status(500).send("Error fetching items");
   }
});

// Display the add item form
app.get('/add-item', (req, res) => {
    res.render('add-item');  // This will render the add-item.ejs view
});

// POST route to add new item
app.post('/add-item', async (req, res) => {
    const { name, price, rating, description, image } = req.body;
console.log(req.body)
    try {
        Item.create({ name, price, rating, description, image });

        res.status(200).send('Item added successfully!');
    } catch (error) {
        res.status(500).send('Error adding item: ' + error.message);
    }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
