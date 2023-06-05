import React, { useState,useEffect } from 'react'
import SearchBar from'./SearchBar'
import WeatherDisplay from './WeatherDisplay'


const App = () => {
  const city = {
    "São Paulo": { latitude: '-23', longitude: '-46' },
    "Rio de Janeiro": { latitude: '-22', longitude: '-43' },
    "Nova York": { latitude: '40', longitude: '-74' },
    "Londres": { latitude: '51', longitude: '-0' },
    "Fortaleza": {latitude: '-3' , longitude : '-38'}
  };

  const [h,setH] = useState([]);
  
  const [show,setShow] = useState({})
  const handleKey = (event) => {
      if(event.key === 'Enter'){

        handleFind(valor)

      }
  }
  const handleFind = (name) => {

    if(name==='Fortaleza' || name==='São Paulo' || name==='Nova York' || name==='Londres' || name==='Rio de Janeiro'){

      let lat = city[name].latitude
      let long = city[name].longitude

      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=weathercode&current_weather=true`)
                .then(response => {
                if (!response.ok) {
                throw new Error('Failed to fetch weather data');
                }
                return response.json();
                })
            .then(data => {
                 let newtask = {
                  latitude : data.latitude ,
                  longitude : data.longitude ,
                  temperatura : data.current_weather.temperature
                }
                  setShow(newtask)
                  console.log(newtask)
                  setH(['Latitude : ','Longitude : ','Temperature : '])
                })
            .catch(error => {
                console.error(error);
                
                });


    }
    else {
      
        setShow({
          latitude : 'Failed to fetch weather data',
        })
        setH(['','',''])

      
    }


  }

  const[valor,setValor]=useState('')

  const handleChange = (e) => {

    setValor(e.target.value)
    
  }

  useEffect( () => {
    handleFind('Fortaleza')

  },[])

  return <>

  <div className="container">

    <div >
      <div className='search'>
      <span>Search</span>
      </div>
        
    
    <SearchBar  handleKey={handleKey} handleChange={handleChange} />
    </div>

    <div>

      <WeatherDisplay  h ={h} data={show} />
    
  </div>
  </div>
  
  
  </>
}

export default App

  