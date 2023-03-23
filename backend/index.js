const express = require("express");
const config = require("./db.config");

const db = require("knex")({
  client: "mysql2",
  connection: {
    host: config.HOST,
    port: config.PORT,
    user: config.USER,
    password: config.PASSWORD,
    database: config.DATABASE,
  },
});

db.schema.createTableIfNotExists("todos", (table) => {
  table.bigIncrements("id").primary();
  table.text("content").notNullable();
  table.boolean("done").notNullable().defaultTo(false);
}).then()

const cors = require("cors");
const app = express();

const port = 4001
app.use(express.json());
app.use(cors());

app.get("/todos", async (req, res) => {
  db.select("*").from("todos").then((data) => {
    res.json(data);
  });
});

app.post("/todos", async (req, res) => {
  db.insert(req.body).into("todos").then(() => {
    res.status(200).send(true);
  })
});

app.delete("/todos/:todoId", async (req, res) => {
  db.where("id", req.params.todoId).del().from("todos").then(() => {
    res.send("Deleted");
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
