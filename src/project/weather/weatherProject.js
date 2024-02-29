import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Location from './location';
import Weather from './weather';
import { ThemeContext } from '../../context/themeContext';
import HeaderProjects from '../../component/headerProjects';
import capitalList from '../../data/capital.json'
import ListCity from './listCity';
import '../../css/weatherProject.css';
export default function WeatherProject() {
    const [capital, setCapital] = useState('Berlin');
    const [weatherLocation, setWeatherLocation] = useState('');
    const [weatherCurrent, setWeatherCurrent] = useState('');
    const { theme, fontColor } = useContext(ThemeContext);

    useEffect(() => {
        if (capital !== '')
            axios.request(`http://api.weatherapi.com/v1/current.json?key=2bf2c701229643f487e101138241701&q=${capital}&aqi=yes`).then(
                (res) => {
                    setWeatherLocation(res.data.location);
                    setWeatherCurrent(res.data.current);
                }
            )
    }, [capital]);
    return (
        <div className="row project-row">
            <div className="col-12 project-container text-start position-absolute top-50 start-50 translate-middle"
                style={{ "backgroundColor": theme, "color": fontColor }}>
                <div className='row'>
                    <div className='col-12 '>
                        <HeaderProjects />
                    </div>
                </div>
                <div className='row weather-content'>
                    <div className='col-lg-4 col-md-4 col-sm-12 py-3'>
                        <select className=' text-break' onChange={(e) => setCapital(e.target.value)} multiple>
                            {
                                capitalList?.city.sort().map((city, key) => {
                                    return (
                                        <ListCity city={city} key={key} />
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className='col-lg-8 col-md-8 col-sm-12 h-100'>
                        <Location location={weatherLocation} />
                        <Weather current={weatherCurrent} />
                    </div>
                </div>
            </div>
        </div>
    )
}