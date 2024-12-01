import * as React from 'react';
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import "../styles/starRating.scss";
import { IStarRating } from '../interfaces/starRating/StarRating';

export default function StarRating(properties: IStarRating) {

    const MAXIMUM_NUMBER_OF_STARS = 10;
    const {rating, large } = properties;



    const setNumberOfStars = () => {
        const fullStar = Math.floor(rating);
        const halfStar = Math.ceil(rating % 1);
        const children = [];
        for(let i=0; i<MAXIMUM_NUMBER_OF_STARS; i++) {
            if(i < fullStar) {
                children.push(<li key={i}><FaStar className= {large ? "star-icon-large" : "star-icon"}/></li>)
            }
            else if(i == fullStar && halfStar > 0) {
                children.push(<li key={i}><FaRegStarHalfStroke className= {large ? "star-icon-large" : "star-icon"}/></li>)
            }
            else {
                children.push(<li key={i}><FaRegStar className= {large ? "star-icon-large" : "star-icon"}/></li>)
            }
        }
        return children;
    } 

    return (
        <div className="star-rating-container">
            <ul className='horizontal-list'>
                {
                    setNumberOfStars()
                }
            </ul>
        </div>
    )
}