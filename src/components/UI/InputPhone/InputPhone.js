import React from 'react';
import InputMask from 'react-input-mask';
import classes from './InputPhone.css'

const InputPhone = (props) => {
  return (
    <div className={classes.mainInp}>
      <InputMask
        id={props.id}
        onChange={props.onChange}
        className={classes.maskForm}
        value={props.value}
        mask="+7 (999)999-99-99"
        maskChar="_" 
		placeholder='+7 (999) 999-99-99'
        onFocus={props.onFocus}
      />
    </div>
  )
}

export default InputPhone


