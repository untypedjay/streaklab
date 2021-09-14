import { useState } from "react";
import { useHistory } from "react-router-dom";
import { ExerciseType } from "../../App";
import { round } from "../../utils/common";
import Break from "../Break/Break";
import Exercise from "../Exercise/Exercise";

interface Props {
  children: ExerciseType[];
}

export default function Workout({ children }: Props) {
  const [exerciseNumber, setExerciseNumber] = useState(0);

  const history = useHistory();

  const triggerNext = () => {
    console.log("triggered");
    if (exerciseNumber + 1 === children.length) {
      alert("Congratulations. You finished this workout!");
      history.push("/");
    }
    setExerciseNumber(exerciseNumber + 1);
  };

  const quitWorkout = () => {
    const shouldQuit = window.confirm(
      "Do you really want to stop this workout?"
    );
    if (shouldQuit) {
      history.push("/");
    }
  };

  return (
    <>
      <button onClick={() => quitWorkout()}>X</button>
      {children[exerciseNumber].name === "Break" ? (
        <Break
          timeInSeconds={children[exerciseNumber].timeInSeconds || 20}
          nextExercise={children[exerciseNumber + 1]}
          triggerNext={triggerNext}
        />
      ) : (
        <Exercise triggerNext={triggerNext}>
          {children[exerciseNumber]}
        </Exercise>
      )}

      <div>{round((exerciseNumber + 1 / children.length) * 100)}%</div>
    </>
  );
}
