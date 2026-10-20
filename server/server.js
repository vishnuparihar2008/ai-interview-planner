require("dotenv").config();
const app = require("./src/app");
const connectToDB = require("./src/config/database");

PORT = process.env.PORT;

connectToDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
  });
});
