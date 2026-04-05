const app = require("./src/app");

const mongo = require("mongoose");

function connectDB() {
  mongo
    .connect(
    // config link
    )
    .then(() => {
      console.log("Database Connected");
    });
}

connectDB();

app.listen(3000, () => {
  console.log("Server running");
});
