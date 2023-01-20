/**
 * Entry point the the server
 */

const express = require("express")
const path = require('path')

// Constants
const APP_PORT = 3000;

const ROOT_PATH = path.join(__dirname, '..')

// utils
function getPublicFile(filename) {
  return path.join(ROOT_PATH, 'public/' + filename);
}

// create the app
const app = express()

// routing
app.get("/", (req, res) => {
  res.sendFile(getPublicFile("index.html"))
})

app.use(express.static(path.join(ROOT_PATH, 'public')))

// listen
app.listen(APP_PORT, () => {
  console.log(`App listening on port ${APP_PORT}`)
})
