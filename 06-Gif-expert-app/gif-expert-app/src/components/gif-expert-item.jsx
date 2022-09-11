import { Fragment } from "react";
import PropTypes from 'prop-types';

export const GifExpertItem = ({ gif }) => {
    return (
        <Fragment>
            <div className="card">
                <img src={gif.url}></img>
                <p><a href={gif.url}>{gif.title}</a></p>
            </div>
        </Fragment>
    )

}
