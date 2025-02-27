import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
// import connectDb from "./Lib/db.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get("/", async (req, res) => {
  res.send("Hey from the Backend");
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  // connectDb();
});
