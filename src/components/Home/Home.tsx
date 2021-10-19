import { useHistory } from "react-router-dom";
import { FaChartBar, FaCog } from 'react-icons/fa';
import styled from "styled-components";

const StyledSettingsButton = styled.button`
  display: absolute;
  right: 0;
`;

const StyledImage = styled.img`
  display: none;
`;

interface Props {
  showVisitors?: boolean;
}

export default function Home({ showVisitors = false }: Props) {
  const history = useHistory();
  
  return (
    <>
      <StyledSettingsButton onClick={() => history.push("/settings")}><FaCog /></StyledSettingsButton>
      <StyledSettingsButton onClick={() => history.push("/statistics")}><FaChartBar /></StyledSettingsButton>
      <h1>WorkItOut</h1>
      <button onClick={() => history.push("/workouts/0")}>
        <h3>Full Body Dumbbell</h3>
        <p>60 min</p>
      </button>

      { showVisitors ?
        <img src="https://profile-counter.glitch.me/great-app-sdkjsd-dev-2021-10-05/count.svg" alt="Visitors"/> :
        <StyledImage src="https://profile-counter.glitch.me/great-app-sdkjsd-dev-2021-10-05/count.svg" alt="Visitors" />
      }
    </>
  );
}
