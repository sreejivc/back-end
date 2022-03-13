const express = require("express");
const cors = require("cors");
const TemplateInfo = require("./src/models/TemplateDB");
const UserInfo = require("./src/models/UsersDB");
const ResumeInfo = require("./src/models/ResumeDB");
const loginRouter = require("./src/routes/LoginRoute");
const signupRouter = require("./src/routes/SignupRoute");
const emailvalidator = require("email-validator");

const port = process.env.PORT || 5000

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/login", loginRouter);
app.use("/signup", signupRouter);

app.get("/userslist", function (req, res) {
  UserInfo.find().then(function (users) {
    res.json(users);
  });
});

app.post("/deleteuser/:id", function (req, res) {
  const id = req.params.id;
  const filter = { _id: Object(id) };
  UserInfo.findOneAndDelete(filter).then(function (users) {
    res.json(users);
  });
});

app.post("/resumedetails", function (req, res) {
  var resume = {
    basicInfo: {},
    interests: [],
    skills: [],
    education: [],
    experience: [],
  };

  resume.basicInfo.phone = req.body.phone;
  resume.basicInfo.email = req.body.email;
  resume.basicInfo.website = req.body.website;
  resume.basicInfo.address = req.body.address;
  resume.basicInfo.experience = req.body.experience;

  var interests = [];
  interests.push(req.body.interest1);
  interests.push(req.body.interest2);
  interests.push(req.body.interest3);
  interests.push(req.body.interest4);
  interests.push(req.body.interest5);
  resume.interests = interests;

  var skills = [];
  skills.push(req.body.skill1);
  skills.push(req.body.skill2);
  skills.push(req.body.skill3);
  skills.push(req.body.skill4);
  skills.push(req.body.skill5);
  skills.push(req.body.skill6);
  skills.push(req.body.skill7);
  resume.skills = skills;

  var education1 = {
    school: req.body.school1,
    year: req.body.schoolyear1,
  };
  var education2 = {
    school: req.body.school2,
    year: req.body.schoolyear2,
  };
  var degree1 = {
    school: req.body.degree1,
    year: req.body.edyear1,
  };
  var degree2 = {
    school: req.body.degree2,
    year: req.body.edyear2,
  };
  var degree3 = {
    school: req.body.degree3,
    year: req.body.edyear3,
  };

  resume.education.push(education1, education2, degree1, degree2, degree3);

  var experience1 = {
    company: req.body.company1,
    job: req.body.job1,
    year: req.body.exyear1,
  };
  var experience2 = {
    company: req.body.company2,
    job: req.body.job2,
    year: req.body.exyear2,
  };
  var experience3 = {
    company: req.body.company3,
    job: req.body.job3,
    year: req.body.exyear3,
  };
  resume.experience.push(experience1, experience2, experience3);
});

// Port number
app.listen(port, () => {
  console.log("Listening on port 5000");
});
