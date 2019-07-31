import React from 'react'
import classes from './Preloader.css'

const Preloader = () => {
  return (
  <div className={classes.mainPreloader}>
    <div className={classes.Preloader}>
      <div className={[classes.cssloadInner, classes.cssloadOne].join(' ') } />
      <div className={[classes.cssloadInner, classes.cssloadTwo].join(' ')}  />
      <div className={[classes.cssloadInner, classes.cssloadThree].join(' ')} />
    </div>
  </div>
  )
}

export default Preloader