import express from "express";
import {
  send_reservation,
  getAllReservations,
} from "../controller/reservation.js";

const router = express.Router();

router.post("/send", send_reservation);
router.get("/all", getAllReservations);

export default router;
