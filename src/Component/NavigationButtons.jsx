import React from 'react'
import { useDispatch} from 'react-redux'
import { next } from '../Store/Page'
import { useSelector } from 'react-redux'
import { back } from '../Store/Page'
import { info } from '../Store/Slice'
import cn from 'classnames';
import classes from "./style.module.scss";


const NavigationButtons = () => {
  const page=useSelector((e)=>e.page.value);
  const user = useSelector(e => (e.user?.value));
  const dispatch=useDispatch();

  const nextClick=()=>{
    console.log(user)
    dispatch(info({...user,nextClick:true}));
    if(user?.emailValid && user?.phoneValid && user?.name.length>2 && page==0){
      dispatch(next());
      dispatch(info({...user,nextClick:false}))
    }
    if(page!=0){
      dispatch(next());
    }
    
  }

  const navigationClasses = cn({
    [classes.navigation]: page === 0,
    'navigation btnRight': page !== 0,
  });

  return (
    <div className={navigationClasses}>
      {page !== 0 && <button className={classes.btn2} onClick={() => dispatch(back())}>Go Back</button>}
      <button className={classes.btn2} onClick={nextClick}>
        {page === 3 ? 'Conform' : 'Next Step'}
      </button>
    </div>
  )
}

export default NavigationButtons