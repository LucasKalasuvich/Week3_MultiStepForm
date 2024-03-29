import React, { useState,useEffect,useRef} from 'react'
import { useSelector } from "react-redux";
import classes from "./style.module.scss";


const Pack = ({packs,chengeClick}) => {
  const refcheck=useRef();
  const user=useSelector(e=>e.user.value);
  const samb=user.plantime;
  const price=samb=="Yearly"?packs.price.yearly:packs.price.monthly;
  return (
    <label className={!packs.addon?'dflex pack':'dflex pack planClick'} for={packs.title}>
        <div className={classes.dflex}>
          <input className={classes.checkMark} ref={refcheck} type="checkbox" 
          name={packs.title} id={packs.title} defaultChecked={packs.addon}
          onChange={()=>{chengeClick(packs.title)}}/>
        <div className={classes.title}>
            <h3>{packs.title}</h3>
            <p>{packs.text}</p>
        </div>  
        </div>
        
        <span>+{price}$/{samb=="Yearly"?"yr":"mo"}</span>
    </label>
  )
}

export default Pack