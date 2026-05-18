import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });
import express from "express";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

const app = express();


app.use(
  cors({
    origin: "https://eatlyrestaurant.netlify.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);
// This tells the backend to allow security check requests from your frontend
app.options("*", cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/reservation", reservationRouter);
app.get("/", (req, res, next)=>{return res.status(200).json({
  success: true,
  message: "HELLO WORLD AGAIN"
})})

dbConnection();

app.use(errorMiddleware);

export default app;
