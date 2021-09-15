import { useEffect, useState } from "react";
import styled from "styled-components";
import { ExerciseType } from "../../App";
import Timer from "../Timer/Timer";

const StyledExercise = styled.div`
  background-color: #fe4042;
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledExerciseName = styled.h3`
  text-transform: uppercase;
  font-size: 2rem;
  margin-bottom: 0;
  text-align: center;
`;

const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1em;
`;

const StyledButton = styled.button`
  color: white;
  background-color: black;
  border: none;
  border-radius: 8px;
  padding: 16px;
  font-weight: bold;
  font-size: 16px;
`;

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
    <StyledExercise>
      <StyledExerciseName>{children.name}</StyledExerciseName>
      <p>{children.instance}</p>
      {children.timeInSeconds ? (
        <Timer onTimerExpired={() => triggerNext()}>
          {children.timeInSeconds}
        </Timer>
      ) : (
        <>
          <p>
            {children.suggestedReps} reps
            {children.suggestedWeight && (
              <span> / {children.suggestedWeight} kg</span>
            )}
          </p>
          <div>Info Card here</div>
          {currentReps.length === 0 ? (
            <>
              <p>Amount of completed repetitions:</p>
              <StyledGridContainer>
                <StyledButton onClick={() => setCurrentReps("0 - 5")}>
                  &lt; 6
                </StyledButton>
                <StyledButton onClick={() => setCurrentReps("6 - 10")}>
                  6 - 10
                </StyledButton>
                <StyledButton onClick={() => setCurrentReps("11 - 15")}>
                  11 - 15
                </StyledButton>
                <StyledButton onClick={() => setCurrentReps("16 - 20")}>
                  16 - 20
                </StyledButton>
                <StyledButton onClick={() => setCurrentReps("21 - 25")}>
                  21 - 25
                </StyledButton>
                <StyledButton onClick={() => setCurrentReps("26 - 30")}>
                  26 - 30
                </StyledButton>
              </StyledGridContainer>
            </>
          ) : (
            <>
              <p>Applied weight:</p>
              <StyledGridContainer>
                <StyledButton onClick={() => setCurrentWeight("4.5 kg")}>
                  4.5 kg
                </StyledButton>
                <StyledButton onClick={() => setCurrentWeight("7 kg")}>
                  7 kg
                </StyledButton>
                <StyledButton onClick={() => setCurrentWeight("9.5 kg")}>
                  9.5 kg
                </StyledButton>
                <StyledButton onClick={() => setCurrentWeight("12 kg")}>
                  12 kg
                </StyledButton>
                <StyledButton onClick={() => setCurrentWeight("14.5 kg")}>
                  14.5 kg
                </StyledButton>
                <StyledButton onClick={() => setCurrentWeight("17 kg")}>
                  17 kg
                </StyledButton>
              </StyledGridContainer>
            </>
          )}
        </>
      )}
    </StyledExercise>
  );
}
