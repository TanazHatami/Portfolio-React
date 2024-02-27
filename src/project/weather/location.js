export default function Location(props) {
    return (
        <div className='row m-0'>
            <div className='col-12 location'>
                    <h1 className="country">{props.location.country}</h1>
                    <p className="capital">{props.location.name}</p>
            </div>
        </div>
    )
}