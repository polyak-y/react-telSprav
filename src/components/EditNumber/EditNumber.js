import React from 'react';
import classes from './EditNumber.css'
import InputName from '../UI/InputName/InputName';
import InputPhone from '../UI/InputPhone/InputPhone';
import Button from '@material-ui/core/Button';


const EditNumber = (props) => {
  
  const cls = [classes.EditNumber]
  if(props.visible){
    cls.push(classes.visible)
  } else {
    cls.push(classes.hide)
  }

  return (
    <form className={cls.join(' ')}>
      <h2>Редактирование номера</h2>
      <InputName value={props.valueName} onChange={props.onChangeValue} id="name"/> 
      <InputPhone value={props.valuePhone} onChange={props.onChangeValue} id="phone"/>
      {!props.correctData ? <p className={classes.error}>Некорректные данные для редактирования</p> : null}      
      <div className={classes.buttonBlock}>
        <Button variant="contained" color="primary" className={classes.editButton} onClick={props.onClickEdit} >
          Редактировать
        </Button>
        <Button variant="contained" color="secondary" className={classes.cancelButton} onClick={props.onClickClose}>
          Отмена
        </Button>
      </div>
    </form> 
  )
}

export default EditNumber
//подключается в Telephone.js