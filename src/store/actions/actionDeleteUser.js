import axios from 'axios'
import { listOutput } from './actionListOutput';
import { addListSearch } from './actionFilterSearch';

export function deleteUser(id) {
  
  return async (dispatch, getState) => {
    try {
      await axios.delete(`https://telephonniy-spravochnik.firebaseio.com/numberList/${id}.json`)  
      dispatch(listOutput())

      if(getState().numberPhone.valueSearch.trim() !== '') { //эмуляция удаления номера когда набираем в поиске
          const searchList = getState().numberPhone.listSearch.filter((elem) => {
            return elem.id === id ? false : true     
          })
          dispatch(addListSearch(searchList))
      }
    } catch(e) {
      console.log(e)
    }
  }
}