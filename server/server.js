// const express = require("express")
// import express from "express"
// import morgan from "morgan"
// const morgan = require("morgan")
// const cors = require("cors")
// const connect = require("./database/conn.js")
import express from "express"
import cors from "cors"
import morgan from "morgan"
import connect from "./database/conn.js"
import router from "./router/route.js"
import bodyParser from "body-parser"

const app = express()

// middlewares

app.use(express.json())
app.use(cors())
app.use(morgan("tiny"))
app.disable("x-powered-by")
// Increase the maximum payload size
app.use(bodyParser.json({ limit: "50mb" }))
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 500000,
  })
)
// app.use(bodyParser.json({ limit: "10mb" }))
// app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }))

const port = 8080

app.get("/", (req, res) => {
  res.status(201).json("home get request")
})

// api router
app.use("/api", router)

connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`server is connected to http://localhost:${port}`)
      })
    } catch (error) {
      console.log("connot connect to the server")
    }
  })
  .catch((error) => {
    console.log("Invalid database connection" + error)
  })
