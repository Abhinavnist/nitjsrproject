// import { MongoMemoryServer } from "mongodb-memory-server"
/* import mongoose from "mongoose"
import ENV from "../config.js"

import { MongoMemoryServer } from "mongodb-memory-server"
async function connect() {
  const mongod = await MongoMemoryServer.create()
  const getUri = mongod.getUri()

  mongoose.set("strictQuery", true)
  // const db = await mongoose.connect(getUri)
  const db = await mongoose.connect(ENV.ATLAS_URI)
  console.log("database connected")
  return db
}
export default connect */
import mongoose from "mongoose"
import ENV from "../config.js"
import { MongoMemoryServer } from "mongodb-memory-server"

async function connect() {
  let db
  mongoose.set("strictQuery", true)
  if (process.env.NODE_ENV === "test") {
    // Create an instance of MongoMemoryServer
    const mongod = await MongoMemoryServer.create()
    const getUri = mongod.getUri()

    // Connect to the in-memory database
    db = await mongoose.connect(getUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  } else {
    // Connect to the production database using the ATLAS_URI from the config
    db = await mongoose.connect(ENV.ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  }

  console.log("Database connected")
  return db
}

export default connect
