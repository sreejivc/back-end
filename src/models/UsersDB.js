const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://ashique:zxcvbnml@database.nvbnr.mongodb.net/database?retryWrites=true&w=majority"
);

const Schema = mongoose.Schema;

var userSchema = new Schema({
  username: String,
  email: String,
  password: String,
});

var UserInfo = mongoose.model("Users", userSchema);

module.exports = UserInfo;
