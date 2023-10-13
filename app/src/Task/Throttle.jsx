import React, { useState } from "react";

const Throttle = () => {
  const throttle = (callback, delay) => {
    let prevTime = new Date().getTime();
    return (...args) => {
      let curTime = new Date().getTime();
      console.log(new Date().getMonth());
      if (curTime - prevTime > delay) {
        callback(...args);
        prevTime = curTime;
      }
    };
  };
  const debounce = (callback, delay) => {
    let timeoutID;
    return (...args) => {
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  };
  return (
    <div>
      <button
        onClick={throttle((e) => {
          console.log(e);
        }, 2000)}
      >
        throttle
      </button>
      <button onClick={debounce(() => console.log("debounce"), 2000)}>
        Debounce
      </button>
    </div>
  );
};

export default Throttle;
