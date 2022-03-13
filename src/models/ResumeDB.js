const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://ashique:zxcvbnml@database.nvbnr.mongodb.net/database?retryWrites=true&w=majority"
);

const Schema = mongoose.Schema;

var resumeDetails = new Schema({
  basicInfo: {
    phone: Number,
    email: String,
    website: String,
    address: String,
    experience: String,
  },
  interests: Array,
  skills: Array,
  education: Array,
  experience: Array,
});

var ResumeInfo = mongoose.model("Resumes", resumeDetails);

module.exports = ResumeInfo;
