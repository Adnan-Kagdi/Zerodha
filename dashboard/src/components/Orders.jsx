import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"

const Orders = () => {
  let [newOrders, setNewOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/addOrders").then((res) => {
      console.log(res.data);
      setNewOrders(res.data);
    })
  }, []);

  const searchedOrders = newOrders.filter(
    (stock) => stock.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <>
      <div style={{ display: "flex", marginBottom: "0.4rem" }}>
        <h3 className="title">Orders ({searchedOrders.length})</h3>
        <hr style={{ border: "none" }}></hr>
        <input
          type="text"
          name="search"
          value={searchQuery}
          placeholder="Search your orders"
          className="HolSearch"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>

          {
            searchedOrders.map((stock, idx) => {
              return (

                <tr key={idx}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.price}</td>
                  <td style={{fontSize: "0.9rem", fontWeight: "300"}}
                    className={stock.mode == "BUY" ? "buyOrder" : "sellOrder"}>
                    {stock.mode}
                  </td>
                </tr>
              )
            })
          }
        </table>
      </div>
    </>
  );
};

export default Orders;
