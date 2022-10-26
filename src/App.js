import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  //creating IP state
  // const [ip, setIP] = useState("");
  // const [mapUrl, setMapUrl] = useState("");
  // const [lat, setLat] = useState("");
  const [info, setInfo] = useState("");

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get("https://client.aesap.workers.dev", {
      crossDomain: true,
    });
    console.log(res.data);
    setInfo(res.data);
    // setIP(res.data.ip);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <header>
        <nav class="navbar bg-grey">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              <h2>IP Buddy</h2>
            </a>
          </div>
        </nav>
      </header>
      <div className="card">
        <div class="card-header">
          <h4>Your IP Data</h4>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">IP Address: {info.ip}</li>
          <li class="list-group-item">
            Location : {info.city}, {info.region} {info.postalCode},{" "}
            {info.country}
          </li>
          <li class="list-group-item">
            Coordinates: {info.latitude}, {info.longitude}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
