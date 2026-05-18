import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Reservation = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const [item, setItem] = useState("");

  const navigate = useNavigate();

  const handleReservation = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "https://eatly-ofnr.onrender.com/api/v1/reservation/send",

        {
          firstName,
          lastName,
          email,
          phone,
          date,
          time,
          item,
        },

        {
          headers: {
            "Content-Type": "application/json",
          },

        
        }
      );

      if (response && response.data) {

        toast.success(
          response.data.message ||
          "Reservation Successful!"
        );

        setFirstName("");
        setLastName("");
        setPhone("");
        setEmail("");
        setTime("");
        setDate("");
        setItem("");

        navigate("/success");
      }

    } catch (error) {

      if (
        error.response &&
        error.response.data
      ) {

        toast.error(
          error.response.data.message ||
          "Validation failed."
        );

      } else {

        console.error(
          "Network or CORS Error context:",
          error
        );

        toast.error(
          "Network error: Connection to the server was blocked."
        );
      }
    }
  };

  return (
    <section
      className="reservation"
      id="reservation"
    >

      <div className="container">

        <div className="banner">
          <img
            src="/reservation.png"
            alt="res"
          />
        </div>

        <div className="banner">

          <div className="reservation_form_box">

            <h1>
              MAKE A RESERVATION
            </h1>

            <p>
              For Further Questions,
              Please Call 7569935612
            </p>

            <form onSubmit={handleReservation}>

              <div>

                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) =>
                    setFirstName(
                      e.target.value
                    )
                  }
                  required
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) =>
                    setLastName(
                      e.target.value
                    )
                  }
                  required
                />

              </div>

              <div>

                <input
                  type="date"
                  placeholder="Date"
                  value={date}
                  onChange={(e) =>
                    setDate(
                      e.target.value
                    )
                  }
                  required
                />

                <input
                  type="time"
                  placeholder="Time"
                  value={time}
                  onChange={(e) =>
                    setTime(
                      e.target.value
                    )
                  }
                  required
                />

              </div>

              <div>

                <input
                  type="email"
                  placeholder="Email"
                  className="email_tag"
                  value={email}
                  onChange={(e) =>
                    setEmail(
                      e.target.value
                    )
                  }
                  required
                />

                <input
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) =>
                    setPhone(
                      e.target.value
                    )
                  }
                  required
                />

              </div>

              <div>

                <input
                  type="text"
                  placeholder="Food Item"
                  value={item}
                  onChange={(e) =>
                    setItem(
                      e.target.value
                    )
                  }
                  required
                />

              </div>

              <button type="submit">

                RESERVE NOW

                <span>
                  <HiOutlineArrowNarrowRight />
                </span>

              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Reservation;