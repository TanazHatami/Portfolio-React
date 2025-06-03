export default function WeatherIcon({ icon, status }) {
    return (
        <div className="project-weather__icon-wrapper">
            <img className='project-weather__icon' alt="Icon" src={icon} />
            <p className="project-weather__status">{status}</p>
        </div>
    )
}