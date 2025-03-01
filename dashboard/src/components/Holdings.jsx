import { useState, useEffect } from "react";

import axios from "axios"
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  let [newHoldings, setNewHoldings] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios.get("https://zerodha-byxx.onrender.com/addHoldings").then((res) => {
      console.log(res.data);
      setNewHoldings(res.data);
    })
  }, []);

  const searchedHoldings = newHoldings.filter(
    (stock) => stock.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const labels = searchedHoldings.map((stockName) => stockName["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: 'Stock Price',
        data: searchedHoldings.map((stock) => stock.price),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }

  return (
    <>
      <div style={{ display: "flex", marginBottom: "0.4rem" }}>
        <h3 className="title">Holdings ({searchedHoldings.length})</h3>
        <hr style={{ border: "none" }}></hr>
        <input
          type="text"
          name="search"
          value={searchQuery}
          placeholder="Search your holdings"
          className="HolSearch"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {
            searchedHoldings.map((stock, idx) => {
              const currValue = stock.price * stock.qty;
              const isProfit = currValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit"

              return (

                <tr key={idx}>
                  <td>{stock.name}</td>
                  <td>{stock.name}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{currValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(currValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              )
            })
          }
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
