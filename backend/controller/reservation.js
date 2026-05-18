import ErrorHandler from "../middlewares/error.js";
import { Reservation } from "../models/reservation.js";

// SEND RESERVATION
const send_reservation = async (
  req,
  res,
  next
) => {

  const {
    firstName,
    lastName,
    email,
    date,
    time,
    phone,
    item,
  } = req.body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !date ||
    !time ||
    !phone||
    !item
  ) {
    return next(
      new ErrorHandler(
        "Please Fill Full Reservation Form!",
        400
      )
    );
  }

  try {

    await Reservation.create({
      firstName,
      lastName,
      email,
      date,
      time,
      phone,
      item,
    });

    res.status(201).json({
      success: true,
      message:
        "Reservation Sent Successfully!",
    });

  } catch (error) {

    if (
      error.name === "ValidationError"
    ) {

      const validationErrors =
        Object.values(error.errors).map(
          (err) => err.message
        );

      return next(
        new ErrorHandler(
          validationErrors.join(", "),
          400
        )
      );
    }

    return next(error);
  }

};

// GET ALL RESERVATIONS
const getAllReservations = async (
  req,
  res
) => {

  try {

    const reservations =
      await Reservation.find();

    res.status(200).json({
      success: true,
      reservations,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

export {
  send_reservation,
  getAllReservations,
};