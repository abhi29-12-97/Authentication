// setting up mongoose schema for the atlas database
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
var uri = process.env.MONGOLAB_URI || process.env.MONGODB_URI;
const db = mongoose
  .connect(uri, {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log("no connection", err));

export default db;
