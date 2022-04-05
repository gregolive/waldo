import { useState, useEffect } from 'react';
import '../styles/Timer.css';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => { setSeconds(seconds + 1) }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);
  

  return (
    <div className='Timer'>
      <p>Time</p>
      <span>{seconds} s</span>
    </div>
  );
};

export default Timer;
