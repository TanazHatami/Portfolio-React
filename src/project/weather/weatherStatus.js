export default function WeatherStatus({ status }) {
    return (
        <div className='row m-0'>
            <div className='col-12'>
                <p className="status">{status}</p>
            </div>
        </div>
    )
}