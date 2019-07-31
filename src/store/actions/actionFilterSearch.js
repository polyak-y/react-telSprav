import { SORT, VALUE_SEARCH, ADD_LIST_SEARCH, SORT_SEARCH } from "./actionTypes";


export function sortClick(listNumber) {
  return (dispatch, getState) => {
    let sort
    if(getState().numberPhone.valueSearch !=='') {
      sort = getState().numberPhone.sortSearch
    } else {
      sort = getState().numberPhone.sort
    }

    if(!sort) {
      listNumber.sort(function(first, second) {
        if (first.name.toLowerCase() === second.name.toLowerCase()) return 0;
        if (first.name.toLowerCase() > second.name.toLowerCase()) return 1;
        else return -1;
      });
    } else {
      listNumber.sort(function(first, second) {
        if (first.name.toLowerCase() === second.name.toLowerCase()) return 0;
        if (first.name.toLowerCase() > second.name.toLowerCase()) return -1;
        else return 1;
      });
    }   

    const myArr = [...listNumber]

    if(getState().numberPhone.valueSearch.trim() !== '') {
      dispatch(addSortAbonentsSearch(myArr))
    } else {
      dispatch(addSortAbonents(myArr))  
    }
      
  } 
}

export function addSortAbonents(myArr) {
  return {
    type: SORT,
    listSort: myArr
  }
}

export function addSortAbonentsSearch(myArr) { 
  return {
    type: SORT_SEARCH,
    listSort: myArr
  }
  
}

export function valSearch(list, value){
  return (dispatch) => {
    
    dispatch(addValue(value))

    const searchList = list.filter((elem) => {

      const oneName = elem.name.split(' ');

      for(let val of oneName) {
        if(val.toLowerCase().indexOf(value.toLowerCase()) === 0) return true
      }
      return false
    })

    dispatch(addListSearch(searchList))
  }
}

export function addValue(value) {
  return {
    type: VALUE_SEARCH,
    value: value
  }
}

export function addListSearch (searchList){
  return {
    type: ADD_LIST_SEARCH,
    searchList: searchList
  }
}
