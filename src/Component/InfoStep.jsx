import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { info } from "../Store/Slice";
import classes from "./style.module.scss"
import { useState, useEffect,useRef} from "react";

const InfoStep = () => {
  const dispatch = useDispatch();
  const user = useSelector(e => (e.user?.value));
  const [perinfo, setPer] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const emailval = e => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,10})$/i;
    return regex.test(e);
  };
  const phoneVal = e => {
    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i;
    return regex.test(e);
  };
  const refName=useRef();
  const refEmail=useRef();
  const refPhone=useRef();
  
  useEffect(() => {
    dispatch(info({
      ...user,
      name: perinfo.name,
      email: perinfo.email,
      phone: perinfo.phone,
      emailValid: emailval(perinfo.email),
      phoneValid: phoneVal(perinfo.phone)
    }));
  }, [perinfo.name, perinfo.email, perinfo.phone]);

  useEffect(() => {
    refName.current.value = user?.name || '';
    refEmail.current.value = user?.email || '';
    refPhone.current.value = user?.phone || '';
    dispatch(info({
      ...user,
      emailValid: emailval(user?.email),
      phoneValid: phoneVal(user?.phone)
    }));
  }, []);
  

  return (
    <div className={classes.info}>
    <h2>Personal info</h2>
    <p>Please provide your name, email address, and phone number.</p>
    <form className={classes.form} autoComplete="on">
      <div className={classes.fields}>
        <div className={classes.dflex}>
          <label>Name</label>
          {user?.nextClick && (
            <span>{user?.name?.length < 3 && "This field is required"}</span>
          )}
        </div>
        <input
          type="text" ref={refName} autoComplete="on"
          className={(user && user.name && user.name.length < 3 && user.nextClick) ? "error" : ""}
          onChange={(e) => setPer({ ...perinfo, name: e.target.value })}
        />
      </div>
      <div className={classes.fields}>
        <div className={classes.dflex}>
          <label>Email Address</label>
          {!user?.emailValid && user?.nextClick && (
            <span>
              {user?.email === "" ? "This field is required" : "Invalid Email Address"}
            </span>
          )}
        </div>
        <input
          type="text" ref={refEmail}
          inputMode="email"
          className={!user?.emailValid && user?.nextClick ? "error" : ""}
          onChange={(e) => setPer({ ...perinfo, email: e.target.value })}
        />
      </div>
      <div className={classes.fields}>
        <div className={classes.dflex}>
          <label>Phone Number</label>
          {!user?.phoneValid && user?.nextClick && (
            <span>This field is required</span>
          )}
        </div>
        <input
          type="text" ref={refPhone}
          inputMode="tel"
          className={!user?.phoneValid && user?.nextClick ? "error" : ""}
          onChange={(e) => setPer({ ...perinfo, phone: e.target.value })}
        />
      </div>
    </form>
  </div>
  );
};

export default InfoStep;
