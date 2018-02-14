import React from "react";
import DonutChart from "./ignore/DonutChart";

function Thermostat(props){
  return (<DonutChart value={props.currentTemp || 23 } />)
}

export default Thermostat;