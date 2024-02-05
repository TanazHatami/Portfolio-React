import { useContext } from "react";
import WeatherDetail from "./weatherDetail";
import WeatherIcon from "./weatherIcon";
import WeatherStatus from "./weatherStatus";
import { LanguageContext } from "../../context/languageContext";
import WeatherLastUpdate from "./weatherLastUpdate";

export default function Weather(props) {
    const icon = props.current.condition?.icon;
    const text = props.current.condition?.text;
    const temp = props.current?.temp_c;
    const wind = props.current?.wind_kph;
    const humidity = props.current?.humidity;
    const update = props.current?.last_updated;
    const {language}=useContext(LanguageContext);
    return (
        <div className='row h-75 pt-5 '>
            <div className='col-12 weather'>
                   <WeatherIcon icon={icon}/>
                    <WeatherStatus status={text}/>
                    <div className='row m-0 mt-3'>
                       <WeatherDetail text={temp} titel={language==='EN'?"Temperatur":"Temperature"}/>
                       <WeatherDetail text={wind} titel={'Wind'}/>
                       <WeatherDetail text={humidity} titel={language==='EN'?"Feuchtigkeit":"Humidity"}/>
                    </div>
                    <WeatherLastUpdate text={language==='EN'?"Letzte Aktualisierung":"Last updated"} update={update}/>
                </div>
            </div>
    )
}