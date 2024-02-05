import '../css/header.css';
export default function Header({ titel, border = true }) {
    return (
        <div className='row m-0 header'>
            <div className='col-12>'>
                <p className={border ? 'header-bottom-border titel' : 'header-no-border titel'}>{titel}</p>
            </div>
        </div>

    )
}