import React from 'react';
import classes from './ErrorMessage.css'
import valid from '../../../img/valid.gif'

const ErrorMessage = () => {
  return (
    <div className={classes.errorAlert}>
      <div className={classes.mainTextError}>
        <img style={{ width: 110, marginBottom: -20 }} src={valid} alt='valid' />
        <p>Данные введены неккоректно!</p>
      </div>
    </div>
  )
}

export default ErrorMessage