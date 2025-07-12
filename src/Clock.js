// import { useState } from "react";

// const Clock = () => {
//     // get the time of your locality
//     let time = new Date().toLocaleTimeString();
//     let month = new Date().toLocaleDateString('default', { month: 'long' });
//     let day = new Date().toLocaleDateString('default', { weekday: 'long' });

//     // this is to update the time
//     const [currentTime, setCurrentTime] = useState(time);

//     const updateTime = () => {
//         let time = new Date().toLocaleTimeString();
//         setCurrentTime(time);
//     }

//     setInterval(updateTime, 1000);

//     return (
//         <div className="clockContainers">
//             <h1> {currentTime} </h1>
//             <h1> {day}, {month} </h1>

//         </div>
//     )
// }

// export default Clock;


import React, { useRef, useEffect } from "react";

const Clock = () => {

    const secondHandRef = useRef(null);
    const minsHandRef = useRef(null);
    const hourHandRef = useRef(null);

    const month = new Date().toLocaleDateString('default', { month: 'long' });
    const day = new Date().toLocaleDateString('default', { weekday: 'long' });
    const today = new Date().toLocaleDateString('en-US', { day: 'numeric' });


    useEffect(() => {
        const secondHand = secondHandRef.current;
        const minsHand = minsHandRef.current;
        const hourHand = hourHandRef.current;

    
        function setDate() {
          const now = new Date();
    
          const seconds = now.getSeconds();
          const secondsDegrees = ((seconds / 60) * 360) + 90;
          secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
          const mins = now.getMinutes();
          const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
          minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    
          const hour = now.getHours();
          const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
          hourHand.style.transform = `rotate(${hourDegrees}deg)`;
        }
    
        setInterval(setDate, 1000);
    
        setDate();
      }, []);


    return (
        <div className="my-div">
            <div className="clockContainer">
                <div className="outer-clock-face">
                    <div className="marking marking-one"></div>
                    <div className="marking marking-two"></div>
                    <div className="marking marking-three"></div>
                    <div className="marking marking-four"></div>
                    <div className="inner-clock-face"></div>
                    <div ref={hourHandRef} className="hand hour-hand"></div>
                    <div ref={minsHandRef} className="hand min-hand"></div>
                    <div ref={secondHandRef} className="hand second-hand"></div>
                </div>
            </div>
            <div className="dateContainer">
                <h1> {day}, {month} {today} </h1>
            </div>
        </div>

        
    )
}

export default Clock;