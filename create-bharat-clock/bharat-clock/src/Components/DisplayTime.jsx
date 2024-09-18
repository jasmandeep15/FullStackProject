import { useEffect, useState } from "react";

let date = new Date();
function DisplayTime() {
  const [time, setTime] = useState(date);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      console.log(`Interval cleared`);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      This is the time: {date.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </div>
  );
}

export default DisplayTime;
