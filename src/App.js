import React, { Component } from 'react';
import classes from './App.css'
import Telephone from './components/Telephone/Telephone';
import FormAdd from './components/FormAdd/FormAdd';
import fon from './img/fon.jpg'
import FilterSearch from './components/FilterSearch/FilterSearch';

class App extends Component {

  render() {
    return (
      <div className={classes.App} style={{backgroundImage: `url(${fon})`}}>
        <h1>Телефонный справочник v.1.1</h1>
        <FilterSearch />
        <Telephone />  
        <FormAdd /> 
      </div>
    );
  }
}

export default App; 
