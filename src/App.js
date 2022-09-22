import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'

function App() {
  //creating IP state
  const [ip, setIP] = useState('');
  const [mapUrl, setMapUrl] = useState('');
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const [info, setInfo] = useState('');

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/',{ crossDomain: true })
    console.log(res.data);
    setInfo(res.data);
    setIP(res.data.IPv4);

  }
  
  useEffect( () => {
    //passing getData method to the lifecycle method
    getData()

  }, [])

  if (!ip) {
    return (
      <div className="App">
          <h1>Turn off adblock and reload.</h1>
    </div>
)
  } else {
    return (
      <div className="App">
        <img width="250" height="150" src={('https://c.tenor.com/3tcJqs1Xpg0AAAAC/hack-hacker.gif')} alt="loading..." />
        
        <h4>IP Address: {ip}</h4>
        <h4>Location : {info.city}, {info.state} {info.postal}</h4>
       </div>
    );
  }

}

export default App;
