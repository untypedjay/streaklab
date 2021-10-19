import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router";
import styled from "styled-components";
import { ExerciseType } from "../../App";

const StyledBackButton = styled.button`
    border: none;
`;

const StyledTable = styled.table`
    overflow: scroll;
`;

interface Props {
    children: ExerciseType[][];
}

export default function Statistics({ children }: Props) {
    const history = useHistory();

    return (
        <>
            <StyledBackButton onClick={() => history.push('/')}><FaArrowLeft/></StyledBackButton>
            <h3>Statistics</h3>
            <h4>Full Body Dumbbell</h4>
            <StyledTable>
                <thead>
                    <tr>
                        {children[0].map((exercise) => <td>{exercise.name}</td>)}
                    </tr>
                </thead>
                <tbody>
                    {children.map((workout, index) =>
                        <tr>
                            <td>Workout {index + 1}</td>
                            {workout.map((exercise) => <td>{exercise.suggestedReps} / {exercise.suggestedWeight}</td>)}
                        </tr>
                    )}
                </tbody>
            </StyledTable>
        </>
    );
}