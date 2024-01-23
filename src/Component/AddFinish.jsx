import React from 'react'
import classes from './style.module.scss';

const AddFinish = ({title,price,smbol}) => {
  return (
    <div className={classes.dflexaddFinish}>
        <p>{title}</p>
        <span>+${price}/{smbol}</span>
    </div>
  )
}

export default AddFinish