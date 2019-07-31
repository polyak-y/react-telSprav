import {ADD_NEW_NUMBER, 
        ALL_LIST, 
        VALUE_CHANGE, 
        NULL_VALUE, 
        ADD_ERR_TRUE,
        VALUE_EDIT,
        CLOSE_EDIT,
        VALUE_CHANGE_EDIT,
        CORRECT_DATA,
        SORT,
        VALUE_SEARCH,
        ADD_LIST_SEARCH,
        SORT_SEARCH,
        CLEAR_VALUE_SEARCH,
        ADD_ERR_FALSE,
        SUCCESS_TRUE,
        SUCCES_FALSE,
        LOAD_TRUE,
        LOAD_FALSE,
      } from "../actions/actionTypes";

const initialState = {
  list: [],
  listSearch: [],
  valueName: '',
  valueNumber: '',
  error: false,
  success: false,
  edit: false,
  name: '',
  phone: '',
  idEdit: null,
  visible: false,
  correctData: true, 
  sort: true,
  sortSearch: true,
  valueSearch: '',
  load: false
}

export default function listReducer(state = initialState, action){

  switch(action.type) {
    case ADD_NEW_NUMBER : 
      const newList = [...state.list, action.copyNewNumber]
      if(state.sort) {
        newList.sort(function(first, second) {
          if (first.name.toLowerCase() === second.name.toLowerCase()) return 0;
          if (first.name.toLowerCase() > second.name.toLowerCase()) return 1;
          else return -1;
        });
      } else {
        newList.sort(function(first, second) {
          if (first.name.toLowerCase() === second.name.toLowerCase()) return 0;
          if (first.name.toLowerCase() > second.name.toLowerCase()) return -1;
          else return 1;
        });
      }  

      return {
        ...state,
        list: newList
      }
    case ALL_LIST : 
      return {
        ...state,
        list: action.allList
      }
    case VALUE_CHANGE :      
      return {
        ...state,
        error: false,
       [action.payload]: action.value,    
      }
    case VALUE_CHANGE_EDIT : 
      return {
        ...state,
        [action.payload]: action.value,
      }
    case NULL_VALUE :
      return {
        ...state,
        valueName: '',
        valueNumber: ''
      }
    case ADD_ERR_TRUE :
    return {
      ...state,
      error: true
    }
    case VALUE_EDIT : 
      return {
        ...state,
        name: action.name,
        phone: action.phone,
        idEdit: action.id,
        visible: true
      }
    case CLOSE_EDIT :
      return {
        ...state,
        name: '',
        phone: '',
        visible: false,
        correctData: true
      }
    case CORRECT_DATA :
      return {
        ...state,
        correctData: false
      }
    case SORT : 
      return {
        ...state,
        list: action.listSort,
        sort: !state.sort,
        sortSearch: !state.sort
      }
    case SORT_SEARCH : {
      
      return {
        ...state,
        listSearch: action.listSort,
        sortSearch: !state.sortSearch
      }
    }
    case VALUE_SEARCH :
      return {
        ...state,
        valueSearch: action.value, 
      }
    case ADD_LIST_SEARCH : 
      return {
        ...state,
        listSearch: action.searchList
      }
    case CLEAR_VALUE_SEARCH :
      return {
      ...state,
      valueSearch: '',      
      }
    case ADD_ERR_FALSE : 
    return {
      ...state, 
      error: false
    } 
    case SUCCESS_TRUE : 
      return {
        ...state,
        success: true
      }
    case SUCCES_FALSE :
      return {
        ...state,
        success: false
      }
    case LOAD_TRUE :
      return {
        ...state,
        load: true
      }
    case LOAD_FALSE :
      return {
        ...state,
        load: false
      }
      
    default: 
     return state
  }
}
