"use client"
import * as React from 'react';
import { redirect } from 'next/navigation'
import Image from "next/image";
import "../styles/showCard.scss";
import StarRating from './StarRating';
import { IShowCardProps } from '../interfaces/show/Show';


function ShowCard(properties: IShowCardProps) {
    const {id, name, imageUrl, rating } = properties;

    const showDetails = () => {
        redirect(`/shows/${id}`)
    }
    return (
        <div className='card-container' onClick={showDetails}>
            <div className="card-img-wrappe">
            <Image  
            aria-hidden
            src={imageUrl}
            alt="Not found" 
            width={0}
  height={0}
  sizes="100vw"
  priority={true}
  style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className='card-text'>
                <h5 className="card-title">{name}</h5>
                <StarRating rating={rating} />
            </div>
        </div>
    )
}
export default ShowCard;