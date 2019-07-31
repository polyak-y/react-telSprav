import React from 'react';
import classes from './Layout.css'

const Layout = (props) => {
  const cls = [classes.Layout]
  if(props.visible) {
    cls.push(classes.visible)
  }

  return (
     <div className={cls.join(' ')} onClick={props.onClick} />
  )
}

export default Layout
