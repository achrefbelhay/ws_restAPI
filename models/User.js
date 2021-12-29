let mongoose = require("mongoose");
let userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
});
module.exports = User = mongoose.model("User", userSchema);
