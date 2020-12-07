import React, { useEffect, useState } from "react";

import TripHistoryServices from "./Services/TripHistoryService";

const TripHistoryService = new TripHistoryServices();

export default function App() {
  const [tripHistories, setTripHistories] = useState([]);

  useEffect(() => {
    TripHistoryService.postTripHistory("21bc4ebf-e5bf-4600-bba3-f0082c5ef03f")
      .then((response) => {
        setTripHistories(response.data.data.trips);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <h1>Trip History</h1>
      <ul>
        {tripHistories.map((tripHistory) => {
          return (
            <li key={tripHistory.created_time}>
              {new Date(tripHistory.created_time).toLocaleDateString()}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
