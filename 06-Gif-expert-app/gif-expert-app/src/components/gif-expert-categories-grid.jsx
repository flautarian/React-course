import { Fragment } from "react";
import { GifExpertItem } from "./gif-expert-item";
import { UseFetchGifs } from "../hooks/UseFetchGifs";
import PropTypes from 'prop-types';

export const GifExpertCategoriesGrid = ({ category }) => {
    
    const { images, isLoading } = UseFetchGifs( category );
    
    return (
        <Fragment>
            <h3>{category}</h3>
            {
                 isLoading && ( <h2>Loading...</h2> )
            }
            <div className="card-grid">    
                {images.map(image => {
                    return (
                        <GifExpertItem key={image.id} {...image} />
                    );
                })}
            </div>
        </Fragment>
    )
}

GifExpertCategoriesGrid.propTypes = {
    category: PropTypes.string.isRequired
}