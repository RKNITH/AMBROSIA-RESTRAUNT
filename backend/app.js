import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";

// Load environment variables from .env file
dotenv.config({ path: "./config.env" });

const app = express();

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/reservation", reservationRouter);

app.get("/", (req, res, next) => {
  return res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN",
  });
});

app.use(errorMiddleware);

const PORT = process.env.PORT || 3001;
const URI = process.env.MONGO_URI;
console.log('MONGO_URI:', process.env.MONGO_URI);

// MongoDB connection
mongoose.connect(URI)
  .then(() => console.log("Mongodb connected"))
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process if unable to connect to MongoDB
  });

app.listen(PORT, () => {
  console.log(`SERVER HAS STARTED AT PORT ${PORT}`);
});
