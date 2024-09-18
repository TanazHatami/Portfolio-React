export default function Location(props) {
    return (
        <div className='project-weather__location'>
            <p>{props.location.country}</p>
            <span>/</span>
            <p>{props.location.name}</p>
        </div>
    )
}