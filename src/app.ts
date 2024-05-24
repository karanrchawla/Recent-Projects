import express from "express";
import path from "path";
import cors from "cors";
import router from "./routers/apis";
// import mongoose from "mongoose";
// import mysql from 'mysql2/promise';

import dotenv from "dotenv";
// import db from "./DB/database";
const app = express();

dotenv.config();
const appPromise = async () => {
  const port = process.env.PORT || 8080;
  app.use(express.json({ limit: "100mb" }));
  app.use(express.static(path.join(__dirname, "../public")));
  app.use(cors());
  app.use("/api", router);

  // await mongoose
  //   .connect(`${process.env.MONGO_URI}`)
  //   .then(() => {
  //     console.log("MongoDB connected");
  //   })
  //   .catch(() => {
  //     console.log("MongoDB Connection");
  //   });
  // await db()
  app.listen(port, () => {
    console.log(`Server connected at port http://localhost:${port}`);
  });
};
appPromise();
