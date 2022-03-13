const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://ashique:zxcvbnml@database.nvbnr.mongodb.net/database?retryWrites=true&w=majority"
);

const Schema = mongoose.Schema;

var templateSchema = new Schema({
  name: String,
});

var TemplateInfo = mongoose.model("Templates", templateSchema);

module.exports = TemplateInfo;
