const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require('express-fileupload');
const { indexRouter } = require("./routes/indexRouter");

require("dotenv").config();
require("./config/dbConfig");
require("./config/cloudinaryConfig")


const app = express();

const corsOptions = {
  origin: true,
  credentials: true,
};
app.use(fileUpload());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json({ limit: "100mb" }));
app.use("/", indexRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is Runnig at Port ${process.env.PORT}`);
});
