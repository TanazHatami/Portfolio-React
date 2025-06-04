import { useEffect, useState } from 'react';
import axios from 'axios';
import Location from './location';
import Weather from './weather';
import capitalList from '../../data/capital.json'
import ListCity from './listCity';
import '../../css/weatherProject.css';
export default function WeatherProject() {
    const [capital, setCapital] = useState('Berlin');
    const [weatherLocation, setWeatherLocation] = useState('');
    const [weatherCurrent, setWeatherCurrent] = useState('');

    useEffect(() => {
        if (capital !== '')
            axios.request(`https://api.weatherapi.com/v1/current.json?key=2bf2c701229643f487e101138241701&q=${capital}&aqi=yes`).then(
                (res) => {
                    setWeatherLocation(res.data.location);
                    setWeatherCurrent(res.data.current);
                }
            )
    }, [capital]);
    return (
        <div className='project-weather'>
            <select className='project-weather__list' onChange={(e) => setCapital(e.target.value)} multiple>
                {
                    capitalList?.city.sort().map((city, key) => {
                        return (
                            <ListCity city={city} key={key} />
                        )
                    })
                }
            </select>
            <div className='project-weather__content'>
                <Location location={weatherLocation} />
                <Weather current={weatherCurrent} />
            </div>
        </div>
    )
}