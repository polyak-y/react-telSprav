import axios from 'axios'
import { ALL_LIST, LOAD_TRUE, LOAD_FALSE } from './actionTypes';


export function listOutput() {
  return async (dispatch, getState) => {

    dispatch(loadTrue())

    try {
      const response = await axios.get('https://telephonniy-spravochnik.firebaseio.com/numberList.json')     

      const allList = []
     
      Object.keys(response.data).forEach((elem) => {
        allList.push({
          id: elem,
          name: response.data[elem].name,
          phoneNumber: response.data[elem].phoneNumber  
        })
      })

      if(getState().numberPhone.sortSearch) {
        allList.sort(function(first, second) {
          if (first.name.toLowerCase() === second.name.toLowerCase()) return 0;
          if (first.name.toLowerCase() > second.name.toLowerCase()) return 1;
          else return -1;
        });
      } else {
        allList.sort(function(first, second) {
          if (first.name.toLowerCase() === second.name.toLowerCase()) return 0;
          if (first.name.toLowerCase() > second.name.toLowerCase()) return -1;
          else return 1;
        });
      }  

      dispatch(addListState(allList))
      dispatch(loadFalse())
    
    } catch(e) {
      console.log(e)
    }
  }
}

export function addListState(allList) {
  return {
    type: ALL_LIST,
    allList: allList
  }
}

export function loadTrue() {
  return {
    type: LOAD_TRUE
  }
}

export function loadFalse() {
  return {
    type: LOAD_FALSE
  }
}