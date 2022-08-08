import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import studentRoutes from "./routes/student.js";

const app = express();

app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

app.use(cors());

app.use("/students", studentRoutes);

const MONGO_URL =
  "mongodb+srv://teknath:<password>@cluster0.zfxs6.mongodb.net/StudentManagement?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Connection is established and running on port : ${PORT}`)
    )
  )
  .catch((err) => console.log(err.message));
