import './HomePage.css';
import UnforgettableActivitiesCarousel from "./unforgettable-activities/UnforgettableActivitiesCarousel";
import FeaturedVibes from "./featured-vibes/FeaturedVibes";

const HomePage = () => {
    return(
        <div className='home-page'>
            <div className='carousel-flex'>
                <div className='carousel-description'>
                    Host Unforgettable Activities
                </div>
                <UnforgettableActivitiesCarousel />
            </div>
            <FeaturedVibes />
        </div>
    )
}

export default HomePage;
