const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 5555;
app.use(bodyParser.json());
let savedData = [1, 2, 3, 4, 5, 6, 7];

app.get("/data", (req, res) => {
  res.status(202).send({savedData});
});

app.post("/data", (req, res) => {
  const { body } = req;
  const { name } = body;
  // console.log({body,name});
  savedData = [...savedData, {name:name}];
  res.status(200).send(savedData);
});

app.delete("/delete-data", (req, res) => {
  const { number } = req.query;
  savedData = savedData.filter((num) => num != number);
  res.send(savedData);
});
app.put("/update-index/:index",(req,res)=>{
const {index}=req.params;
const {newNum}=req.body;
savedData[index]=newNum
res.send(index)
})


app.listen(PORT, () => {
  console.log("Server runnig on PORT - " + PORT);
});
