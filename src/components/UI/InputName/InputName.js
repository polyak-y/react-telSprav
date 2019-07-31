import React from 'react';
import TextField from '@material-ui/core/TextField';
import classes from './InputName.css'

const InputName = (props) => {
  return (
    <div className={classes.mainInp}>
      <TextField
        id={props.id}
        label="Имя"
        margin="dense"
        variant="outlined"
        className={classes.inputFloat}
        onChange={props.onChange}
        value={props.value}  
        onFocus={props.onFocus}     
      />
    </div>
  )
}

export default InputName