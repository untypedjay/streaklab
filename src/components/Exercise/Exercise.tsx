import { useState } from 'react';
import styled from 'styled-components';
import { ExerciseType } from '../../App';
import InputRange from '../InputRange/InputRange';
import Timer from '../Timer/Timer';

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
  triggerNext: (exercise?: ExerciseType) => void;
}

export default function Exercise({ children, triggerNext }: Props) {
  const [currentReps, setCurrentReps] = useState(children.suggestedReps);
  const [currentWeight, setCurrentWeight] = useState(children.suggestedWeight);

  const completeExercise = () => {
    const exercise = children;
    if (exercise.suggestedReps) {
      exercise.suggestedReps = currentReps;
    }

    if (exercise.suggestedWeight) {
      exercise.suggestedWeight = currentWeight;
    }

    triggerNext(exercise);
  };

  return (
    <StyledExercise onClick={completeExercise}>
      <StyledExerciseName>{children.name}</StyledExerciseName>
      <p>{children.instance}</p>
      {children.timeInSeconds ? (
        <Timer onTimerExpired={() => triggerNext()}>
          {children.timeInSeconds}
        </Timer>
      ) : (
        <>
          <div>Info Card here</div>
          <InputRange
            label="Amount of completed repetitions:"
            value={currentReps}
            onChange={setCurrentReps}
            unit="reps"
          />
          <InputRange
            label="Applied weight:"
            value={currentWeight}
            onChange={setCurrentWeight}
            unit="kg"
            step={2.5}
            min={2}
          />
        </>
      )}
    </StyledExercise>
  );
}
