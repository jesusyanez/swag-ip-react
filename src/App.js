import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'

function App() {
  //creating IP state
  const [ip, setIP] = useState('');
  const [info, setInfo] = useState('');

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/',{ crossDomain: true })
    console.log(res.data);
    setInfo(res.data)
    setIP(res.data.IPv4)
  }

  // https://www.google.com/maps/embed/v1/view?key=AIzaSyALrSTy6NpqdhIOUs3IQMfvjh71td2suzY&center=26.4722,-81.8122&zoom=16&maptype=satellite
  
  useEffect( () => {
    //passing getData method to the lifecycle method
    getData()

  }, [])

  return (
    <div className="App">
      <img src={('https://c.tenor.com/y1yKziqaf50AAAAM/nice.gif')} alt="loading..." />  Location
      
      <h4>{ip}</h4>
      <h4>{info.city}, {info.state}</h4>
      <h4>{info.postal}</h4>
      <iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-82.58422851562501%2C26.09255497038833%2C-81.0516357421875%2C26.84735326457719&amp;layer=mapnik&amp;marker=26.470573022375085%2C-81.81793212890625" style={{border: "1px solid black"}}></iframe><br/>

    </div>
  );
}

export default App;