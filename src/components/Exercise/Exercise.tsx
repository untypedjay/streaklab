import { useState } from "react";
import styled from "styled-components";
import { ExerciseType } from "../../App";
import Timer from "../Timer/Timer";

const StyledExercise = styled.button`
  background-color: #fe4042;
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
`;

const StyledExerciseName = styled.h3`
  text-transform: uppercase;
  font-size: 2rem;
  margin-bottom: 0;
  text-align: center;
`;

interface Props {
  children: ExerciseType;
  triggerNext: () => void;
}

export default function Exercise({ children, triggerNext }: Props) {
  const [currentReps, setCurrentReps] = useState(children.suggestedReps);
  const [currentWeight, setCurrentWeight] = useState(children.suggestedWeight);

  return (
    <StyledExercise onClick={triggerNext}>
      <StyledExerciseName>{children.name}</StyledExerciseName>
      <p>{children.instance}</p>
      {children.timeInSeconds ? (
        <Timer onTimerExpired={() => triggerNext()}>
          {children.timeInSeconds}
        </Timer>
      ) : (
        <>
          <p>
            {currentReps} reps
            {currentWeight && (
              <span> / {currentWeight} kg</span>
            )}
          </p>
          <div>Info Card here</div>
          <p>Amount of completed repetitions:</p>
          <input type="range" min="0" max="30" value={currentReps} onChange={event => setCurrentReps(Number(event.target.value))}/>
          <p>Applied weight:</p>
          <input type="range" min="2" max="27" step="2.5" value={currentWeight} onChange={event => setCurrentWeight(Number(event.target.value))}/>
        </>
      )}
    </StyledExercise>
  );
}
