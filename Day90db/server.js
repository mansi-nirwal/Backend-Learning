const app = require("./src/app");

const mongo = require("mongoose");

function connectDB() {
  mongo
    .connect(
      "mongodb+srv://manshinirwal19_db_user:mansi19@cohort2.nbnwjd6.mongodb.net/mansi",
    )
    .then(() => {
      console.log("Database Connected");
    });
}

connectDB();

app.listen(3000, () => {
  console.log("Server running");
});
