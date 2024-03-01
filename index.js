const express = require("express");
const cors = require("cors");
const { connectDatabase } = require("./src/database/db.js");
const routes = require("./routes.js");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(routes);

connectDatabase()
  .then(() => {
    app.listen(port, () =>
      console.log(
        `🌐 Server and database are running on http://localhost:${port}`
      )
    );
  })
  .catch((error) => console.error("Erro ao conectar", error));