import styled from "styled-components";
import { ExerciseType } from "../../App";
import Timer from "../Timer/Timer";

const StyledBreak = styled.div`
  background-color: #6b82f0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

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
    <StyledBreak>
      <h3>Break</h3>
      <Timer onTimerExpired={() => triggerNext()}>{timeInSeconds}</Timer>
      <p>Next:</p>
      <p>{nextExercise.name}</p>
      <p>{nextExercise.instance}</p>
    </StyledBreak>
  );
}
