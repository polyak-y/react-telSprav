import React, { Component } from 'react'
import classes from './Telephone.css'
import OneUser from '../OneUser/OneUser'; //подключили компонент
import {connect} from 'react-redux'
import EditNumber from '../EditNumber/EditNumber';
import Layout from '../UI/Layout/Layout';
import { listOutput } from '../../store/actions/actionListOutput';
import { deleteUser } from '../../store/actions/actionDeleteUser';
import { valueEdit, editData } from '../../store/actions/actionEditValue';
import { closeEdit } from '../../store/actions/actionCloseEdit';
import { valueChangeEdit, correctData } from '../../store/actions/actionAddNewNumber';
import paper from '../../img/paper.jpg'
import pruzina from '../../img/pruzina.png'
import Preloader from '../UI/Preloader/Preloader';


class Telephone extends Component {

  deleteNumber = (event) => { //клик на кнопку удалить (удаление одного номера)
    const id = event.currentTarget.dataset.id //получаем значение data-id = id компонента
    this.props.deleteUser(id) // вызываем функцию-action, которой передаем наш id
  }

  editNumber = (event) => {//клик по кнопке редактирования открывающий модалку
    const {name, phone, id} = event.currentTarget.dataset   
    this.props.valueEdit(name, phone, id)
  }

  closeEditWindowHandler = () => { //клик на темный слой с модалкой  и кнопку отмена
    this.props.closeEdit()    
  }

  editNumberName = () => { //клик на кнопку редактировать внутри модалки(внесение изменений при редактировании)
    
    let leng = this.props.phone.match(/\d/g);

    if(this.props.name !== '' &&  this.props.phone !== '' && leng.length > 10 ) {
      this.props.editData()
    } else {
      this.props.correctData()
    }    
  }

  renderNumber = () => {//формирует список всех номеров
    let listNumber;
    
    if(this.props.valueSearch.trim() !== '') {
      listNumber = this.props.listSearch      
    } else {
      listNumber = this.props.listNumber      
    }    

    return listNumber.map((elem)=>{
        return (
          <OneUser valueSearch={this.props.valueSearch.trim()} id={elem.id} key={elem.id} one={elem} clickEdit={this.editNumber} clickDeleteIcon={this.deleteNumber}/>
        )       
    })
  }

  changeValueEditHandler = (event) => {
    const {value, id} = event.target
    this.props.valueChangeEdit(value, id) 
  }

  componentDidMount(){
    this.props.listOutput()    
  }
  
  render() {
  
    return (
        <div className={classes.Telephone} 
            style={{
              background: `url(${pruzina}) repeat-y top center, url(${paper})`,
              backgroundSize: '30px, auto'
            }}> 

            {
              !this.props.load 
                ? 
                  <React.Fragment>
                    {this.renderNumber()} {/* выводим все номера  */}
                    <EditNumber /* поле для редактирования имя и телефона */
                      visible={this.props.visible} 
                      valueName={this.props.name}  
                      valuePhone={this.props.phone} 
                      onClickClose={this.closeEditWindowHandler} 
                      onClickEdit={this.editNumberName}
                      onChangeValue={this.changeValueEditHandler}
                      correctData={this.props.correctDataProps}
                    /> 
                    <Layout visible={this.props.visible} onClick={this.closeEditWindowHandler}/> 
                  </React.Fragment> 
                : <Preloader />  
            }          
          
            
        </div>
    )
  }
}

function mapStateToProps(state) { //получаем со store весь массив номеров и делаем его this.props.listNumber, который передаем в метод renderNumber()
  return {
    listNumber: state.numberPhone.list,
    listSearch: state.numberPhone.listSearch,
    name: state.numberPhone.name,
    phone: state.numberPhone.phone,
    visible: state.numberPhone.visible,
    correctDataProps: state.numberPhone.correctData,
    valueSearch: state.numberPhone.valueSearch,
    load: state.numberPhone.load
  }
}

function mapDispatchToProps(dispatch) {
  return {
    listOutput: () => dispatch(listOutput()),//метод action для получения массива от сервера и передачи его в state
    deleteUser: (id) => dispatch(deleteUser(id)), //метод action для удаления одного номера по его id
    valueEdit: (name, phone, id) => dispatch(valueEdit(name,phone,id)),
    closeEdit: () => dispatch(closeEdit()),
    editData: () => dispatch(editData()), //метод для венсения изменения при редактировании номера
    valueChangeEdit: (value, id) => dispatch(valueChangeEdit(value,id)),
    correctData: () => dispatch(correctData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Telephone)
