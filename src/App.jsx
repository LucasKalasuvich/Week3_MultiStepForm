import React from "react";
import Step1 from "./Component/Step1";
import Steps from "./Component/Steps";
import NavigationButton from "./Component/NavigationButtons";
import FinalStep from "./Component/FinalStep";
import Step4 from "./Component/Step4";
import Step2 from "./Component/Step2";
import { useState } from "react";
import { useSelector } from "react-redux";
import classes from "../src/Component/style.module.scss";
import Step3 from "./Component/Step3";


function App() {

  const page = useSelector((e) => e.page.value)
  const PageDisplay = () => {
    switch (page) {
      case 0:
        return <Step1 />

      case 1:
        return <Step2 /> 

      case 2:
        return <Step3 />

      case 3:
        return <Step4 />

      case 4:
        return <FinalStep />
    }
  }

  return (
    <main>
      <div className={classes.Container}>
        <Steps/>
        <div className={classes.content}>
        {PageDisplay()}
        {page !=4 && <NavigationButton/>} 
        </div>
      </div>
    </main>
  );
}

export default App;
