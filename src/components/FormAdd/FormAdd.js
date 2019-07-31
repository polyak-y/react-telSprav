import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import classes from './FormAdd.css'
import {connect} from 'react-redux'
import { addNewNumber, valueChange, nullValueState, addErrorTrue, clearValueSearch, successTrue } from '../../store/actions/actionAddNewNumber';
import InputPhone from '../UI/InputPhone/InputPhone';
import InputName from '../UI/InputName/InputName';
import ErrorMessage from '../UI/ErrorMessage/ErrorMessage';
import SuccessMessage from '../UI/SuccessMessage/SuccessMessage';
 
 
class FormAdd extends Component { 
 
  addNumberHandler = (event) => { //событие на клик по кнопке добавить абонента
    event.preventDefault()  

    let leng = this.props.globalState.valueNumber.match(/\d/g);

    if (this.props.globalState.valueName !== '' && this.props.globalState.valueNumber !== '' && leng.length > 10) {
      
      this.props.successTrue()

      const oneNumber = {
        name: this.props.globalState.valueName.trim(),
        phoneNumber: this.props.globalState.valueNumber,
      }

      this.props.addNewNumber(oneNumber)
      this.props.nullValueState()
    
    } else {
      this.props.addErrorTrue()     
    }    
  }

  valueHandler = (event) => { //событие на набор данных в инпутах. 
    const {value, id} = event.target
    this.props.valueChange(value, id)   
  }

  focusHandler = () => {
    this.props.clearValueSearch()
  }

  render() {   

    return (
      <form className={classes.FormAdd}>
        { 
          this.props.globalState.error 
            ? <ErrorMessage />
            : null
        } 

        {
          this.props.globalState.success 
          ? <SuccessMessage />
          : null
        }        

        <InputName 
           onChange={this.valueHandler} 
           value={this.props.globalState.valueName}
           id="valueName"
           onFocus={this.focusHandler}
        />   

        <InputPhone
          value={this.props.globalState.valueNumber}
          onChange={this.valueHandler} 
          id="valueNumber"
          onFocus={this.focusHandler}
        />

        <Button variant="contained" color="primary" disabled={this.props.globalState.error || this.props.globalState.success} className={classes.pop} onClick={this.addNumberHandler}>
          Добавить нового абонента
        </Button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    globalState: state.numberPhone
  }
}

function mapDispatchToProps(dispatch){
  return {
    addNewNumber: (newNumber) => dispatch(addNewNumber(newNumber)),
    valueChange: (value, id) => dispatch(valueChange(value,id)),
    nullValueState: () => dispatch(nullValueState()),
    addErrorTrue: () => dispatch(addErrorTrue()),
    clearValueSearch: () => dispatch(clearValueSearch()),
    successTrue: () => dispatch(successTrue())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormAdd);
