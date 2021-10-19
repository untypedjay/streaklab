import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router";
import styled, { css } from "styled-components";
import { ExerciseType } from "../../App";

const tableBorder = css`
    border: 1px solid black;
    border-collapse: collapse;
`;

const StyledBackButton = styled.button`
    border: none;
`;

const StyledTable = styled.table`
    overflow: scroll;
    ${tableBorder}
`;

const StyledTd = styled.td`
    ${tableBorder}
    padding: 4px;
    width: 24px;
`;

const StyledTh = styled.th`
    ${tableBorder}
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
                        <StyledTd></StyledTd>
                        {children[0].map((exercise) => {
                            if (exercise.name !== 'Break') {
                                return <StyledTh>{exercise.name}</StyledTh>
                            }

                            return <></>;
                        }
                        )}
                    </tr>
                </thead>
                <tbody>
                    {children.map((workout, index) =>
                        <tr>
                            <StyledTd>Workout {index + 1}</StyledTd>
                            {workout.map((exercise) => {
                                if (exercise.name !== 'Break') {
                                    return <StyledTd>{exercise.suggestedReps ? exercise.suggestedReps : '-'} / {exercise.suggestedWeight ? exercise.suggestedWeight : '-'}</StyledTd>;
                                }

                                return <></>
                            }
                            )}
                        </tr>
                    )}
                </tbody>
            </StyledTable>
        </>
    );
}