import React from 'react'
import classes from './SuccessMessage.css'
import success from '../../../img/success.gif'


const SuccessMessage = () => {
  return (
    <div className={classes.SuccessMessage}>
      <div className={classes.mainTextError}>
        <img style={{ width: 110, marginBottom: -20 }} src={success} alt='valid' />
        <p>Успешно!</p>
      </div>
    </div>
  )
}

export default SuccessMessage