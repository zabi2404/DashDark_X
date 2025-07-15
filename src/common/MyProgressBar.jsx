import React from "react";
import ProgressBar from "@ramonak/react-progress-bar"; 
export default function MyProgressBar(props) {
  return (
    <div className=" w-full">
      <ProgressBar
        completed={props.growth}
        bgColor={props.color}
        baseBgColor="transparent"
        height="6px"
        labelAlignment="center"
        labelColor="#fff"
        animateOnRender={true}
        labelClassName="hidden"
      />
    </div>
  );
}
