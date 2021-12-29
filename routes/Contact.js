const express = require("express");
const User = require("../models/User");
const router = express.Router();
const Contact = require("../models/User");
// router.get("/", (req, res) => {
//   res.send("test is the mssg ");
// });
// add new user (http://localhost:4000/api/user/add)
router.post("/add", (req, res) => {
  const { name, email } = req.body;
  const newContact = new User({
    name,
    email,
  });
  newContact
    .save()
    .then((User) => res.json({ msg: "contact added", User: User }))
    .catch((err) => console.log(err));
});
//get all user (http://localhost:4000/api/user/add)

router.get("/all", (req, res) => {
  User.find()
    .then((User) => res.send(User))
    .catch((err) => console.log(err));
});
//delete user (http://localhost:4000/api/user/delete)
router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  User.findOneAndDelete({ _id: id })
    .then((User) => res.send(User))
    .catch((err) => console.log(err));
});
// update user (http://localhost:4000/api/user/)
router.put("/update/:id", (request, response) => {
  const { name, email } = request.body;
  User.findByIdAndUpdate(
    request.params.id,
    { $set: { name, email } },
    { new: true }
  )
    .then((User) => response.json({ Message: "User updated", User: User }))
    .catch((err) => console.log(err));
});
module.exports = router;
