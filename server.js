const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

app.use("/nearest-stores", routes.stores);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});