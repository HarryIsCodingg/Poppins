import './VibeAddress.css';
import {Icon} from "@iconify/react";
import {useState} from "react";

const VibeAddress = ({vibe}) => {

    const street = vibe.address.street;
    const rating = vibe.rating;
    const reviews = vibe.reviews;
    const cityFullAddress = vibe.address.fullCity;

    const [isFavorite, setFavorite] = useState(false);

    const handleFavorite = () => {
        setFavorite(prevState => prevState = !prevState);
    }

    return (
        <div className='vibe-address'>
            <h2>{street}</h2>
            <div className='flex row-2'>
                <div className='column-1'>
                    <span><Icon icon='material-symbols:star' fontSize={20}/></span>
                    <span>{rating}</span>
                    <Icon icon='mdi:dot' fontSize={24} />
                    <span>{reviews} reviews</span>
                    <Icon icon='mdi:dot' fontSize={24} />
                    <span>Superhost</span>
                    <Icon icon='mdi:dot' fontSize={24} />
                    <span>{cityFullAddress}</span>
                </div>
                <div className='flex gap-12'>
                    <div className='flex align-center'><Icon icon='lucide:share' fontSize={24} /> share</div>
                    {isFavorite ?
                        <div className='flex align-center'>
                            <Icon icon='line-md:heart-filled' fontSize={30} color='red' onClick={handleFavorite}/>
                            save
                        </div>
                            :
                        <div className='flex align-center'>
                            <Icon icon='line-md:heart-twotone' fontSize={30} onClick={handleFavorite}/>
                        save
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default VibeAddress;
