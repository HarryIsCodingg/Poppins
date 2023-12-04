import './VibeCard.css';
import {Icon} from "@iconify/react";
import {useState} from "react";

const VibeCard = ({vibe}) => {

    const { name, rating, reviews, rentalDuration, price, images } = vibe;
    const firstImage = images[0];
    const [isFavorite, setFavorite] = useState(false);

    const handleFavorite = () => {
        setFavorite(prevState => prevState = !prevState);
    }

    return (
        <div className='vibe-card cursor'>
            <div className='image-container'>
                <img src={firstImage} className='card-image'/>
                {isFavorite ?
                    <Icon className='favorite' icon='line-md:heart-filled' fontSize={30} color='red' onClick={handleFavorite}/> :
                    <Icon className='favorite' icon='line-md:heart-twotone' fontSize={30} onClick={handleFavorite}/>
                }
            </div>

            <div className='flex row card-description'>
                <span><Icon icon='material-symbols:star' fontSize={20}/></span>
                <span>{rating}</span>
                <span>({reviews})</span>
                <span>{rentalDuration} hours</span>
            </div>
            <div>{name}</div>
            <div>From {price} CAD/person</div>
        </div>
    )
}

export default VibeCard;
