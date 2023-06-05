import React  from 'react'
import './index.css'


const WeatherDisplay = ({data,h}) => {



    return (<>

    <div className="display">
       { h[0] } {data.latitude}
    </div>
    <div className="display">
        {h[1]} { data.longitude}
    </div>
    <div className="display">
        {h[2]}{data.temperatura}
    </div>
    
    
    </>);



}

export default WeatherDisplay