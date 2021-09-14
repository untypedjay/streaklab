import { ExerciseType } from "../../App";
import Timer from "../Timer/Timer";

interface Props {
  timeInSeconds: number;
  nextExercise: ExerciseType;
  triggerNext: () => void;
}

export default function Break({
  timeInSeconds,
  nextExercise,
  triggerNext,
}: Props) {
  return (
    <>
      <h3>Break</h3>
      <Timer onTimerExpired={() => triggerNext()}>{timeInSeconds}</Timer>
      <p>Next:</p>
      <p>{nextExercise.name}</p>
      <p>{nextExercise.instance}</p>
    </>
  );
}
