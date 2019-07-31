import React, { Component } from 'react'
import classes from './FilterSearch.css'
import IconButton from '@material-ui/core/IconButton';
import MaterialIcon from 'react-google-material-icons'
import {connect} from 'react-redux'
import { sortClick, valSearch } from '../../store/actions/actionFilterSearch';
import TextFields from '../UI/TextFields/TextFields'


class FilterSearch extends Component {

  clickSortHandler = () => { // клик по кнопке сотрировке
    
    let listNumber;
    
    if(this.props.allState.valueSearch.trim() !== '') {
      listNumber = this.props.allState.listSearch
    } else {
      listNumber = this.props.allState.list
    }

    this.props.sortClick(listNumber)
  }

  searchValueHandler =(event) => { // набор текста в поле поиска
    const {value} = event.target 
    const list = this.props.allState.list
    this.props.valSearch(list, value)
  }

  quantityOfNumbers = () => {
    let count
    
    if (this.props.valueSearch !== '') {
      if(this.props.allState.listSearch.length) {
         count = this.props.allState.listSearch.length
      } else {
        count = 0
      }     
    } else {
      if(this.props.allState.list.length) {
        count = this.props.allState.list.length
      } else {
        count = 0
      }      
    }

    return count
  }

  render() {
    return (      
      <div className={classes.FilterSearch}>
        <div className={classes.sort}>
          <IconButton className={classes.button}  onClick={this.clickSortHandler}>
            <MaterialIcon icon="sort_by_alpha" size={30} />   
          </IconButton>  
        </div> 

        <div className={classes.count}>Номеров в списке: <span>{this.quantityOfNumbers()}</span></div>

        <div className={classes.search}>
          <TextFields value={this.props.valueSearch} onChange={this.searchValueHandler} label='Поиск по имени' />         
         
          <div className={classes.button} >
            <MaterialIcon icon="search" size={24} />   
          </div>  
        </div>           
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    valueSearch: state.numberPhone.valueSearch,
    allState: state.numberPhone
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sortClick: (listNumber) => dispatch(sortClick(listNumber)),
    valSearch: (list, value) => dispatch(valSearch(list, value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterSearch)
