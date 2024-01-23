import React from "react";
import InfoStep from "./Component/InfoStep";
import Steps from "./Component/Steps";
import NavigationButton from "./Component/NavigationButtons";
import ThankyouStep from "./Component/ThankyouStep";
import Finishing from "./Component/Finishing";
import PlanStep from "./Component/PlanStep";
import { useState } from "react";
import { useSelector } from "react-redux";
import classes from "../src/Component/style.module.scss";
import AddonStep from "./Component/AddonsStep";


function App() {

  const page = useSelector((e) => e.page.value)
  const PageDisplay = () => {
    switch (page) {
      case 0:
        return <InfoStep />

      case 1:
        return <PlanStep /> 

      case 2:
        return <AddonStep />

      case 3:
        return <Finishing />

      case 4:
        return <ThankyouStep />
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
