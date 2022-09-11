import { useEffect, useState, Fragment } from "react";
import { GifExpertItem } from "./gif-expert-item";
import { fillGifs } from "../helpers/get-gifs";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifExpertCategoriesGrid = ({ category }) => {
    
    const { images, isLoading } = useFetchGifs({ category });
    
    return (
        <Fragment>
            <h2>{category}</h2>
            {
                 isLoading && ( <h2> Loading... </h2> )
            }
            <div className="card-grid">    
                {images.map(image => {
                    return (
                        <GifExpertItem key={image.id} gif={image} />
                    );
                })}
            </div>
        </Fragment>
    )
}