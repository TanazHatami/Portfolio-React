export default function WeatherDetail({ text, titel }) {
    return (
        <div className="col-4">
            <div className="row">
                <div className='col-12'>
                    <p>{text}</p>
                </div>
                <div className='col-12'>
                    <p>{titel}</p>
                </div>
            </div>
        </div>
    )
}