const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://sagarjaiswal81555:OGSHalTObNVWQjDi@cluster0.yjotyi2.mongodb.net/webmaster?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });
