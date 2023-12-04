import './LocationBar.css';

const LocationBar = () => {
    return (
        <div className='search-container flex row'>
            <div className='container-item'>Montreal</div>
            <div className='vertical-line'></div>
            <div className='calendar-button'>Any Week</div>
            <div className='vertical-line'></div>
            <div className='calendar-button'>Add guests</div>
        </div>
    )
}

export default LocationBar;
