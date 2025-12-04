const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const User = require("./models/User");

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

async function hashExistingPasswords() {
  const users = await User.find({});
  for (let user of users) {
    const hashed = await bcrypt.hash(user.password, 10);
    user.password = hashed;
    await user.save();
    console.log(`✅ Password hashed for: ${user.email}`);
  }
  console.log("✅ All passwords hashed");
  process.exit(); // exit the script when done
}

hashExistingPasswords();
