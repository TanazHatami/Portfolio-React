export default function WeatherLastUpdate({ text, update }) {
    return (
        <div className='project-weather-update'>
            <h5 className="project-weather-update__text">{text}</h5>
            <p className="project-weather-update__date">{update}</p>
        </div>
    )
}