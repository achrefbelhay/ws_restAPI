const express = require("express");
const app = express();
app.use(express.json());
const connectDB = require("./config/connectDB");
connectDB();
app.use("/api/user", require("./routes/Contact"));
app.listen(4000, () => {
  console.log("server is runnig on port 4000");
});
