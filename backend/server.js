import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import coursesRoutes from "./routes/course.routes.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/course", coursesRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is listening to http://localhost:${PORT}`);
});
