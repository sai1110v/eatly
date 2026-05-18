import { useEffect, useState } from "react";
import axios from "axios";
import "./Admin.css";


const Admin = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [reservations, setReservations] =
    useState([]);

  // LOGIN FUNCTION
  const handleLogin = () => {

    if (
      username === "SAI" &&
      password === "VSVN1110"
    ) {
      setIsLoggedIn(true);
    } else {
      alert("Wrong Credentials");
    }

  };

  // FETCH RESERVATIONS
  useEffect(() => {
    if (isLoggedIn) {
      axios
        .get(
          "http://localhost:4000/api/v1/reservation/all"
        )
        .then((res) => {
          setReservations(
            res.data.reservations
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn]);

  // LOGIN PAGE
  if (!isLoggedIn) {
    return (
      <div className="admin-container">

        <div className="admin-card">

          <h1 className="admin-title">
            Admin Login
          </h1>

          <input
            type="text"
            placeholder="Username"
            className="admin-input"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="admin-input"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            className="admin-btn"
            onClick={handleLogin}
          >
            Login
          </button>

        </div>

      </div>
    );
  }

  // DASHBOARD
  return (
    <div className="admin-container">

      <div className="admin-card">

        <h1 className="dashboard-title">
          Admin Dashboard
        </h1>

        <p
          style={{
            color: "white",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Welcome Admin 👋
        </p>

        <div style={{ marginTop: "30px" }}>

          {
            reservations?.map((item) => (

              <div
                key={item._id}
                style={{
                  background: "#334155",
                  padding: "15px",
                  borderRadius: "10px",
                  marginBottom: "15px",
                  color: "white",
                }}
              >

                <h3>
                  {item.firstName} {item.lastName}
                </h3>

                <p>Email: {item.email}</p>

                <p>Phone: {item.phone}</p>

                <p>Date: {item.date}</p>

                <p>Time: {item.time}</p>

                <p>Food Item: {item.item}</p>

              </div>

            ))
          }

        </div>

      </div>

    </div>
  );
};

export default Admin;