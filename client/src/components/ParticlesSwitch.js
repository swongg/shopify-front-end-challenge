import * as React from "react";
import Switch from "@mui/material/Switch";

const ParticlesSwitch = ({ backgroundEffect, setBackgroundEffect }) => {
  return (
    <Switch
    color="default" 
      onChange={() => {
        setBackgroundEffect(!backgroundEffect);
      }}
    />
  );
};

export default ParticlesSwitch;
