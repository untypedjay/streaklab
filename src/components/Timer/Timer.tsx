import { useEffect, useState } from "react";

interface Props {
  children: number;
  onTimerExpired: () => void;
}

export default function Timer({ children, onTimerExpired }: Props) {
  const [timeLeft, setTimeLeft] = useState(children);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 1) {
        setTimeLeft(timeLeft - 1);
      } else {
        onTimerExpired();
        clearInterval(interval);
        setTimeLeft(children);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [children, onTimerExpired, timeLeft]);

  return <div>{timeLeft}</div>;
}
