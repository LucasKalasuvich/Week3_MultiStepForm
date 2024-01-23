import React from 'react'
import classes from "./style.module.scss"

const Step = ({step,title,active}) => {
  return (
    <div className={classes.Step}>
        <span className={`${classes.stepNumber} ${active ? 'active' : ''}`}>{step}</span>
        <div className={classes.stepInfo}>
            <span>STEP {step}</span>
            <p>{title}</p>
        </div>
    </div>
  )
}

export default Step