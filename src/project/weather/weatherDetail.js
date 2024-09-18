export default function WeatherDetail({ text, titel }) {
    return (
        <>
            <div className='project-weather-detail'>
                <p className="project-weather-detail__value">{text}</p>
                <p className="project-weather-detail__title">{titel}</p>
            </div>
        </>
    )
}