require("dotenv").config();

const {createApp} = require("./app")
const {sqlDataSource} = require("./src/models/data-source")

const startServer = async () => {
  const app = createApp()
  const PORT = process.env.PORT

  await sqlDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!!!");
  })
  .catch((err) => {
    console.log("Error during Data Source initialization", err);
  });

  app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
  })
}

startServer()
