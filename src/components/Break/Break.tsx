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

const StyledHeading = styled.h3`
  text-transform: uppercase;
  font-size: 2rem;
  margin-bottom: 0;
`;

const StyledNextExercise = styled.p`
  text-transform: uppercase;
  margin-bottom: 0;
  font-size: 1.5rem;
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
      <StyledHeading>Break</StyledHeading>
      <Timer onTimerExpired={() => triggerNext()}>{timeInSeconds}</Timer>
      <p>Next Exercise:</p>
      <StyledNextExercise>{nextExercise.name}</StyledNextExercise>
      <p>{nextExercise.suggestedReps ? nextExercise.suggestedReps : '-'} / {nextExercise.suggestedWeight ? nextExercise.suggestedWeight : '-'}</p>
    </StyledBreak>
  );
}
