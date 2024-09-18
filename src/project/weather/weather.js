import { useContext } from "react";
import WeatherDetail from "./weatherDetail";
import WeatherIcon from "./weatherIcon";
import { LanguageContext } from "../../context/languageContext";
import WeatherLastUpdate from "./weatherLastUpdate";

export default function Weather(props) {
    const icon = props.current.condition?.icon;
    const text = props.current.condition?.text;
    const temp = props.current?.temp_c;
    const wind = props.current?.wind_kph;
    const humidity = props.current?.humidity;
    const update = props.current?.last_updated;
    const { language } = useContext(LanguageContext);
    return (
        <>
            <WeatherIcon icon={icon} status={text} />
            <div className='project-weather__details-wrapper'>
                <WeatherDetail text={temp} titel={language === 'EN' ? "Temperatur" : "Temperature"} />
                <WeatherDetail text={wind} titel={'Wind'} />
                <WeatherDetail text={humidity} titel={language === 'EN' ? "Feuchtigkeit" : "Humidity"} />
            </div>
            <WeatherLastUpdate text={language === 'EN' ? "Letzte Aktualisierung" : "Last updated"} update={update} />
        </>
    )
}