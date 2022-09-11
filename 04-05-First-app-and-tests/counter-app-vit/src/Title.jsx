import React from 'react';
import { Fragment } from 'react';
import PropTypes from 'prop-types';

export const Title = ({ title, subtitle }) => {

  if(!title) throw new Error('El titulo es obligatorio');
  if(!subtitle) throw new Error('El subtitulo es obligatorio');

  return (
    <Fragment>
      <h1 data-testid="test-title">{title}</h1>
      <h2>{subtitle}</h2>
    </Fragment>
  )
}


Title.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired
}

Title.defaultProps= {
  subtitle: "subtitulo no disponible",
  /* title: "titulo no disponible" */
}