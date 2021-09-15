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

const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1em;
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
          {currentReps.length === 0 ? (
            <>
              <p>Reps</p>
              <StyledGridContainer>
                <button onClick={() => setCurrentReps("0 - 5")}>&lt; 6</button>
                <button onClick={() => setCurrentReps("6 - 10")}>6 - 10</button>
                <button onClick={() => setCurrentReps("11 - 15")}>
                  11 - 15
                </button>
                <button onClick={() => setCurrentReps("16 - 20")}>
                  16 - 20
                </button>
                <button onClick={() => setCurrentReps("21 - 25")}>
                  21 - 25
                </button>
                <button onClick={() => setCurrentReps("26 - 30")}>
                  26 - 30
                </button>
              </StyledGridContainer>
            </>
          ) : (
            <>
              <p>Weight</p>
              <StyledGridContainer>
                <button onClick={() => setCurrentWeight("4.5 kg")}>
                  4.5 kg
                </button>
                <button onClick={() => setCurrentWeight("7 kg")}>7 kg</button>
                <button onClick={() => setCurrentWeight("9.5 kg")}>
                  9.5 kg
                </button>
                <button onClick={() => setCurrentWeight("12 kg")}>12 kg</button>
                <button onClick={() => setCurrentWeight("14.5 kg")}>
                  14.5 kg
                </button>
                <button onClick={() => setCurrentWeight("17 kg")}>17 kg</button>
              </StyledGridContainer>
            </>
          )}
        </>
      )}
    </StyledExercise>
  );
}
