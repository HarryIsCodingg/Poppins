import './VibeCategoryCard.css';

const VibeCategoryCard = ({image}) => {
    return (
        <div>
            <img src={image} className='category-card'/>
        </div>
    )
}

export default VibeCategoryCard;
