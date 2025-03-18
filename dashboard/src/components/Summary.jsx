import React, { useEffect, useState } from "react";

const Summary = () => {
  // const [username, setUsername] = useState("");

  // const getCookie = (name) => {
  //   const cookies = document.cookie.split("; ");
  //   for (let cookie of cookies) {
  //     const [key, value] = cookie.split("=");
  //     if (key === name) return value;
  //   }
  //   return null;
  // };

  // useEffect(() => {
  //   const userId = getCookie("userId")
  //   const userId1 = userId.slice(7);
  //   const id = userId1.slice(0, -3);
  //   console.log(id);
  //   const getUser = async () => {
  //     const response = await fetch(`https://zerodha-byxx.onrender.com/getUser/${id}`);
  //     const result = await response.json();
  //     setUsername(result.username)
  //   }
  //   getUser();
  // }, []);

  return (
    <>
      <div className="username">
        <h6>
          {/* Hi, {username.charAt(0).toUpperCase() + username.slice(1).toLowerCase()} */}
        </h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              1.55k <small>+5.20%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>31.43k</span>{" "}
            </p>
            <p>
              Investment <span>29.88k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
