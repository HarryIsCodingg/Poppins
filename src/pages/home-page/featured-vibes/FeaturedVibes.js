import './FeaturedVibes.css';
import Carousel from "react-multi-carousel";
import React from "react";
import {vibeCategoryData} from "../../../data/vibeCategoryData";
import VibeCategoryCard from "../../../components/shared/vibe-category-card/VibeCategoryCard";

const FeaturedVibes = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
            partialVisibilityGutter: 40
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 1,
            slidesToSlide: 3
        },
        mobile: {
            breakpoint: { max: 767, min: 200 },
            items: 1,
            slidesToSlide: 1,
        }
    };
    return (
        <div className="featured-carousel">
            <h1>Featured Vibes</h1>
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
                {vibeCategoryData.map((vibe, index) => {
                    return (
                        <VibeCategoryCard image={vibe.image} key={index}/>
                    );
                })}
            </Carousel>
        </div>);
}

export default FeaturedVibes;
