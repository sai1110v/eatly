import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Success = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    // This function runs every 1 second
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 1) {
          clearInterval(interval);
          navigate("/"); // Redirect to home page
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);

    // Cleanup function to stop the timer if the user leaves the page
    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <section className="notFound">
      <div className="container">
        <img src="/sandwich.png" alt="success" />
        <h1>Reservation Sent Successfully!</h1>
        <p>Redirecting to Home page in {countdown} seconds...</p>
        <Link to={"/"}>
          Back to Home <HiOutlineArrowNarrowRight />
        </Link>
      </div>
    </section>
  );
};

export default Success;