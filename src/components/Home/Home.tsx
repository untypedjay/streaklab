import { useHistory } from 'react-router-dom';
import { FaChartBar, FaCog } from 'react-icons/fa';
import styled from 'styled-components';
import Auth from '../Auth/Auth';
import { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';

const StyledButton = styled.button`
  display: absolute;
  right: 0;
`;

const StyledInvisibleImage = styled.img`
  display: none;
`;

interface Props {
  showVisitors?: boolean;
}

export default function Home({ showVisitors = false }: Props) {
  const history = useHistory();
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    })
  }, []);

  return (
    <>
      {!session ? <Auth /> :
        <>
          <StyledButton onClick={() => history.push('/settings')}>
            <FaCog />
          </StyledButton>
          <StyledButton onClick={() => history.push('/statistics')}>
            <FaChartBar />
          </StyledButton>
          <h1>StreakLab</h1>
          <h3>Workouts</h3>
          <button onClick={() => history.push('/workouts/0')}>
            <h3>Full Body Dumbbell</h3>
            <p>60 min</p>
          </button>
  
          <h3>Challenges</h3>
  
          {showVisitors ? (
            <img
              src="https://profile-counter.glitch.me/great-app-sdkjsd-dev-2021-10-05/count.svg"
              alt="Visitors"
            />
          ) : (
            <StyledInvisibleImage
              src="https://profile-counter.glitch.me/great-app-sdkjsd-dev-2021-10-05/count.svg"
              alt="Visitors"
            />
          )}
        </>
      }
    </>
  );
}
