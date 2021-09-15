import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { ExerciseType } from "../../App";
import { round } from "../../utils/common";
import Break from "../Break/Break";
import Exercise from "../Exercise/Exercise";

const StyledWorkout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.button`
  position: absolute;
  right: 0;
`;

const StyledProgressBar = styled.div`
  position: absolute;
  bottom: 60px;
`;

interface Props {
  children: ExerciseType[];
}

export default function Workout({ children }: Props) {
  const [exerciseNumber, setExerciseNumber] = useState(0);

  const history = useHistory();

  const triggerNext = () => {
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
    <StyledWorkout>
      <StyledButton onClick={() => quitWorkout()}>X</StyledButton>
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

      <StyledProgressBar>
        {round(((exerciseNumber + 1) / children.length) * 100, 0)}%
      </StyledProgressBar>
    </StyledWorkout>
  );
}
