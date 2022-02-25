import { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useHistory } from 'react-router';
import styled, { css } from 'styled-components';
import { supabase } from '../../supabaseClient';

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
  session: any;
}

export default function Statistics({ session }: Props) {
  const history = useHistory();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getWorkoutHistory()
  }, [session])

  async function getWorkoutHistory() {
    try {
      setLoading(true)
      const user: any = supabase.auth.user()

      let { data, error, status } = await supabase
        .from('workoutHistories')
        .select(`completed_at, exercise_id, elapsed_time, weight`)
        .eq('user_id', user.id)

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        console.log(data)
      }
    } catch (error: any) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <StyledBackButton onClick={() => history.push('/')}>
        <FaArrowLeft />
      </StyledBackButton>
      <h3>{loading ? 'Loading ...' : 'Statistics'}</h3>
      
      {/* <h4>Full Body Dumbbell</h4>
      <StyledTable>
        <thead>
          <tr>
            <StyledTd />
            {children[0].map((exercise) => {
              if (exercise.name !== 'Break') {
                return <StyledTh>{exercise.name}</StyledTh>;
              }

              return <></>;
            })}
          </tr>
        </thead>
        <tbody>
          {children.map((workout, index) => (
            <tr>
              <StyledTd>Workout {index + 1}</StyledTd>
              {workout.map((exercise) => {
                if (exercise.name !== 'Break') {
                  return (
                    <StyledTd>
                      {exercise.suggestedReps ? exercise.suggestedReps : '-'} /{' '}
                      {exercise.suggestedWeight
                        ? exercise.suggestedWeight
                        : '-'}
                    </StyledTd>
                  );
                }

                return <></>;
              })}
            </tr>
          ))}
        </tbody>
      </StyledTable> */}
    </>
  );
}
