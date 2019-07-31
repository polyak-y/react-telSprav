import {ADD_NEW_NUMBER, 
        VALUE_CHANGE, 
        NULL_VALUE, 
        ADD_ERR_TRUE, 
        VALUE_CHANGE_EDIT,
        CORRECT_DATA,
        CLEAR_VALUE_SEARCH,
        ADD_ERR_FALSE,
        SUCCESS_TRUE,
        SUCCES_FALSE} from "./actionTypes";
import axios from 'axios'


export function addNewNumber(newNumber) {
  return async (dispatch) => {
    const response = await axios.post('https://telephonniy-spravochnik.firebaseio.com/numberList.json', newNumber)
    
    const copyNewNumber = {
      id: response.data.name,
      ...newNumber     
    }
    dispatch(addNumArr(copyNewNumber))
  }
}

export function addNumArr(copyNewNumber) {
  return {
    type: ADD_NEW_NUMBER,
    copyNewNumber: copyNewNumber
  }
} 

export function valueChange(value, id){
  return {
    type: VALUE_CHANGE,
    value: value,       
    payload: id
  }
}

export function valueChangeEdit(value, id) {
  return {
    type: VALUE_CHANGE_EDIT,
    value: value,
    payload: id
  }
}

export function nullValueState(){
  return {
    type: NULL_VALUE
  }
}

export function addErrorTrue(){
  return (dispatch) => {
    dispatch(addError())

    setTimeout(()=>{
      dispatch(removeError())
    },4000)
  }  
}

export function addError(){
  return {
    type: ADD_ERR_TRUE
  }
}

export function removeError(){
  return {
    type: ADD_ERR_FALSE
  }
}

export function correctData(){
  return {
    type: CORRECT_DATA
  }
}

export function clearValueSearch(){
  return {
    type: CLEAR_VALUE_SEARCH
  }
}

export function successTrue(){  
  return (dispatch) => {
    dispatch(succesAddTrue())

    setTimeout(()=>{
      dispatch(succesAddFalse())
    },2000)
    
  }
}

export function succesAddTrue(){
  return {
    type: SUCCESS_TRUE
  }
}

export function succesAddFalse(){
  return {
    type: SUCCES_FALSE
  }
}