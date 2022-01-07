// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";

// var TimeLog = new Date();
// var TimeLeave = new Date();
// console.log(b - a); //this works
// localStorage.a = a;
// localStorage.b = b;
// a = Date.parse(localStorage.b);
// b = Date.parse(localStorage.a);
// console.log(b - a);

// const useTimerState = (TimeLog, TimeLeave) => {
//     const [time, setTime] = useState(() => {
//       const presistParam = window.localStorage.getItem(TimeLog);
//       return presistParam !== null ? JSON.parse(presistParam) : defaultValue;
//     });

//     useEffect(() => {
//       window.localStorage.setItem(name, JSON.stringify(param));
//     }, [param, name]);
//     return [param, setParam];
//   };

//   export default usePersistedState;

//   var startTime = new Date();

//   window.onbeforeunload = function () {
//       var endTime = new Date();
//       var timeSpent = (endTime - startTime);
//       alert(timeSpent );
//   }
