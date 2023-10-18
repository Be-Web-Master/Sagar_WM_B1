const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 5555;
require("./dbConfig/dbConfig");
const { userRouter } = require("./routes/indexRouter");
app.use(bodyParser.json());

app.use("/", userRouter);

app.listen(PORT, () => {
  console.log("Server runnig on PORT - " + PORT);
});
