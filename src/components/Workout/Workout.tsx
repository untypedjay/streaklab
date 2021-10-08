import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";
import { ExerciseType } from "../../App";
import useLocalStorage from "../../hooks/useLocalStorage";
import { round } from "../../utils/common";
import Break from "../Break/Break";
import Exercise from "../Exercise/Exercise";

const StyledWorkout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const buttonStyles = css`
  background: transparent;
  border: 0;
  color: white;
  font-size: 40px;
  padding: 0.2em; 
`;

const StyledQuitButton = styled.button`
  ${buttonStyles}
  position: absolute;
`;

const StyledNavigationButton = styled.button`
  ${buttonStyles}
`;

const StyledNavigation = styled.div`
  position: absolute;
  right: 0;
`;

const StyledProgressBar = styled.div`
  position: absolute;
  left: 40px;
`;

interface Props {
  addCompletedWorkout: (workout: ExerciseType[]) => void;
  children: ExerciseType[];
}

export default function Workout({ addCompletedWorkout, children }: Props) {
  const [exerciseNumber, setExerciseNumber] = useState(0);
  const [shouldPlaySound] = useLocalStorage('sound', true)
  const [progress, setProgress] = useState<ExerciseType[]>([]);

  const history = useHistory();
  const sound = new Audio(
    "http://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3"
  );

  const triggerNext = (completedExercise: ExerciseType = children[exerciseNumber]) => {

    if (exerciseNumber + 1 === children.length) {
      completeWorkout(progress.concat(completedExercise));
    }

    setProgress(progress.concat(completedExercise));
    
    if (shouldPlaySound) {
      const playedPromise = sound.play();
      if (playedPromise) {
        playedPromise.catch((e) => {
          if (e.name === "NotAllowedError" || e.name === "NotSupportedError") {
            console.error(e.name);
          }
        });
      }
    }

    if (navigator.vibrate) navigator.vibrate(1000);

    setExerciseNumber(exerciseNumber + 1);
  };

  const completeWorkout = (completedWorkout: ExerciseType[]) => {
    alert("Congratulations. You finished this workout!");
    history.push("/");
    addCompletedWorkout(completedWorkout);
  }

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
      <StyledQuitButton onClick={() => quitWorkout()}><FaTimes/></StyledQuitButton>
      <StyledProgressBar>
        {round(((exerciseNumber + 1) / children.length) * 100, 0)}%
      </StyledProgressBar>
      <StyledNavigation>
        <StyledNavigationButton
          onClick={() => setExerciseNumber(exerciseNumber - 1)}
        >
          <FaArrowLeft/>
        </StyledNavigationButton>
        <StyledNavigationButton onClick={() => triggerNext()}>
          <FaArrowRight/>
        </StyledNavigationButton>
      </StyledNavigation>
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
    </StyledWorkout>
  );
}
