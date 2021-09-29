import { useHistory } from "react-router-dom";
import { FaCog } from 'react-icons/fa';
import styled from "styled-components";

const StyledSettingsButton = styled.button`
  display: absolute;
  right: 0;
`;

export default function Home() {
  const history = useHistory();
  return (
    <>
      <StyledSettingsButton onClick={() => history.push("/settings")}><FaCog /></StyledSettingsButton>
      <h1>WorkItOut</h1>
      <button onClick={() => history.push("/workouts/0")}>
        <h3>Full Body Dumbbell</h3>
        <p>60 min</p>
      </button>
    </>
  );
}
