const express = require("express");
const cors = require("cors");
const { config } = require("dotenv");
config();

//rutas
const { registro } = require("./routes/registro.routes");

const app = express();

app.set("port", process.env.PORT || 3000);

//middelwares
app.use(cors());
app.use(express.json());

//paths
app.use("/registro", registro);

//servidor
app.listen(app.get("port"), () => {
  console.log("PORT ", app.get("port"));
});
