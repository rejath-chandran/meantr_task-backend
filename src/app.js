import express from "express";
import dotenv from "dotenv";
import ConnectToDB from "./config/db.js";
import cors from "cors";
import bodyParser from "body-parser";
import AllRoutes from "./routes/index.js";
dotenv.config();
const PORT = process.env.PORT;
const app = express();

await ConnectToDB();
app.get("/health", (req, res) => res.send("ok"));
AllRoutes(app);

app.use((err, req, res, next) => {
  res.status(500).json({ message: "something went wrong" });
  next(err);
});

app.listen(PORT, () => console.log("server started on :", PORT));
