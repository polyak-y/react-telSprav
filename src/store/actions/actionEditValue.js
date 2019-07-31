import { VALUE_EDIT, CLOSE_EDIT } from "./actionTypes";
import axios from 'axios'
import { listOutput } from "./actionListOutput";
import { addListSearch } from "./actionFilterSearch";


export function valueEdit(name, phone, id) {
  return {
    type: VALUE_EDIT,
    name: name,
    phone: phone,
    id: id
  }
} 

export function editData() { //сюда надо передать данные из полей
  return async (dispatch, getState) => {

    const id = getState().numberPhone.idEdit
    const {name, phone} = getState().numberPhone
    const editPhone = {
      name: name, 
      phoneNumber: phone
    }
    await axios.patch(`https://telephonniy-spravochnik.firebaseio.com/numberList/${id}.json`, editPhone)
    dispatch(listOutput()) 

    if (getState().numberPhone.valueSearch.trim() !== '') { //эмуляция редактирования номера в поиске
      getState().numberPhone.listSearch.forEach((elem) => {
        if (elem.id === id) {
          elem.name =  editPhone.name
          elem.phoneNumber = editPhone.phoneNumber
        }
      })

      const searchList = [...getState().numberPhone.listSearch]
      dispatch(addListSearch(searchList))
    }

    dispatch(closeForm()) 
  
  }
}

export function closeForm(){
  return {
    type: CLOSE_EDIT
  }
}
