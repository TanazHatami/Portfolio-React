export default function WeatherIcon({icon}){
    return(
        <div className='row m-0'>
        <div className='col-12 '>
            <img className='icon'src={icon} />
        </div>
    </div>
    )
}