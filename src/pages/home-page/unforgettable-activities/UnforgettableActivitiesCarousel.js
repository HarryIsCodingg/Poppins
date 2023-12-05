import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./UnforgettableActivitiesCarousel.css";
import vibesData from "../../../data/vibesData";
import VibeCard from "../../../components/shared/vibe-card/VibeCard";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setVibe} from "../../../core/slices/vibeSelectSlice";

export const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        partialVisibilityGutter: 40
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 2,
        slidesToSlide: 3
    },
    mobile: {
        breakpoint: { max: 767, min: 464 },
        items: 1,
        slidesToSlide: 1
    }
};

const UnforgettableActivitiesCarousel = () => {

    const navigateTo = useNavigate();
    const dispatch = useDispatch();

    const redirect = (vibe) => {
        dispatch(setVibe(vibe));
        navigateTo('/vibe');
    }

    return (
        <div className="carousel">
            <Carousel
                responsive={responsive}
                autoPlay={false}
                swipeable={true}
                draggable={true}
                showDots={false}
                infinite={true}
                partialVisible={true}
                dotListClass="custom-dot-list-style"
            >
                {vibesData.map((vibe, index) => {
                    return (
                        <div  className='link-black' onClick={()=>{redirect(vibe)}} key={index}>
                            <VibeCard vibe={vibe} />
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};
export default UnforgettableActivitiesCarousel;
