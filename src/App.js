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

  // https://www.google.com/maps/embed/v1/view?key=AIzaSyALrSTy6NpqdhIOUs3IQMfvjh71td2suzY&center=26.4722,-81.8122&zoom=16&maptype=satellite
  
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
        {/* <iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-81.95096969604494%2C26.425079200885378%2C-81.75939559936525%2C26.519428106704105&amp;layer=mapnik" style={{border: "1px solid black"}}></iframe><br/> */}
      </div>
    );
  }

}

export default App;