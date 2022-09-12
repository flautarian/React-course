import { Fragment } from "react";
import PropTypes from 'prop-types';
import { render, screen } from '@testing-library/react'

export const GifExpertItem = ({ title, url }) => {
    return (
        <Fragment>
            <div className="card">
                <img src={url} alt={title}></img>
                <p>{title}</p>
            </div>
        </Fragment>
    )
}

GifExpertItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
