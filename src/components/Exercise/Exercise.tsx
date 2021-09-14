import { useEffect, useState } from "react";
import { ExerciseType } from "../../App";
import Timer from "../Timer/Timer";

interface Props {
  children: ExerciseType;
  triggerNext: () => void;
}

export default function Exercise({ children, triggerNext }: Props) {
  const [currentReps, setCurrentReps] = useState("");
  const [currentWeight, setCurrentWeight] = useState("");

  useEffect(() => {
    if (currentReps.length && currentWeight.length) {
      console.log(currentReps, currentWeight);
      triggerNext();
      setCurrentReps("");
      setCurrentWeight("");
    }
  }, [currentReps, currentWeight, triggerNext]);

  return (
    <>
      <h3>{children.name}</h3>
      <p>{children.instance}</p>
      {children.timeInSeconds ? (
        <Timer onTimerExpired={() => triggerNext()}>
          {children.timeInSeconds}
        </Timer>
      ) : (
        <>
          <p>
            {children.suggestedReps} reps / {children.suggestedWeight} kg
          </p>
          <div>Info Card here</div>
          <p>Reps</p>
          <div>
            <button onClick={() => setCurrentReps("0 - 5")}>0 - 5</button>
            <button onClick={() => setCurrentReps("6 - 10")}>6 - 10</button>
            <button onClick={() => setCurrentReps("11 - 15")}>11 - 15</button>
            <button onClick={() => setCurrentReps("16 - 20")}>16 - 20</button>
          </div>
          <p>Weight</p>
          <div>
            <button onClick={() => setCurrentWeight("4.5 kg")}>4.5 kg</button>
            <button onClick={() => setCurrentWeight("7 kg")}>7 kg</button>
            <button onClick={() => setCurrentWeight("9.5 kg")}>9.5 kg</button>
            <button onClick={() => setCurrentWeight("12 kg")}>12 kg</button>
          </div>
        </>
      )}
    </>
  );
}
