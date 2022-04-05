import { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => { setSeconds(seconds + 1) }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);
  

  return (<>{seconds}</>);
};

export default Timer;
