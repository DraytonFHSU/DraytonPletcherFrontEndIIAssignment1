import React, { useState, useEffect } from "react";

export default function Greeting(props) {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString()); //State to be updated

  useEffect(() => { //hook so that this works in a function component
    const intervalId = setInterval(() => { //interval for dynamic updates
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup the interval when the component unmounts so that it doesn't cause a memory leak
    return () => clearInterval(intervalId);
  }, []);

  return (
    <span>
      <h1>Hello! Welcome to React!</h1>
      <p style={{ color: "red" }}>
        The date is {currentTime}.
      </p>
    </span>
  );
}
