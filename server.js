const http = require("http");
const PORT = 5500;
const bodyParser = require("body-parser")
let savedData = {
  abc: {
    name: "abc",
    age: "26",
    skill: "reactJS",
  },
  zxy: {
    name: "yyy",
    age: "2s",
    skill: "nodeJS",
  },
};

const getApi = (req, res) => {
  res.write(JSON.stringify(savedData));
};
const postAddData = (req, res) => {
  const { data } = req.body;
  savedData = [...savedData,...data]
  res.write(JSON)
};
http
  .createServer((req, res) => {
    switch (req.url) {
      case "/data:name":
        getApi(req, resolve);
        break;

      default:
        res.write("Invalid URL");
    }

    res.end();
  })
  .listen(PORT);
