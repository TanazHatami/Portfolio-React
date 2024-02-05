export default function WeatherLastUpdate({ text, update }) {
    return (
        <div className='row m-0'>
            <div className='col-12 pt-5 last-update'>
                <h6>{text}</h6>
                <p>{update}</p>
            </div>
        </div>
    )
}