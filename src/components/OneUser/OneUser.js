import React from 'react';
import classes from './OneUser.css'
import MaterialIcon from 'react-google-material-icons'
import ReactTooltip from 'react-tooltip'

const OneUser = (props) => {  

  let name
  if(props.valueSearch !== '') {

    let arr = props.one.name.split(' ')

    name = arr.map((elem,index) => {
      if(elem.trim().toLowerCase().indexOf(props.valueSearch.toLowerCase()) === 0) {
        let str = elem.substr(0, props.valueSearch.length)
        let longStr = elem.toLowerCase().replace(props.valueSearch.toLowerCase(), '')
        return (
          <React.Fragment key={index}><span style={{color: 'rgb(48, 161, 48)'}}>{str}</span>{longStr} </React.Fragment>
        )
      } else {
        return (
          <span key={index}>{elem} </span>
        )
      }
    })
  } else {
    name = props.one.name
  }
 
  return (
    <div className={classes.OneUser} > 
      <ReactTooltip effect="solid" place="top" />
      <p className={classes.userName}>{name}</p>
      <p className={classes.bottomLine}></p>
      <p className={classes.num}>{props.one.phoneNumber}</p>
      <span 
        className={classes.iconSpan} 
        data-tip="Редакитровать" 
        onClick={props.clickEdit} 
        data-name={props.one.name}
        data-phone={props.one.phoneNumber}
        data-id={props.id}>
        <MaterialIcon icon="settings_applications" size={24}/>
      </span>     
      <span className={classes.iconSpanDel} data-tip="Удалить" data-id={props.id}  onClick={props.clickDeleteIcon}>
        <MaterialIcon icon="delete" size={24} />   
      </span>        
    </div>
  )
}

export default OneUser
//подключается в Telephone.js