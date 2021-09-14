import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  return (
    <>
      <h1>WorkItOut</h1>
      <button onClick={() => history.push("/workouts/0")}>
        <h3>Full Body Dumbbell</h3>
        <p>60 min</p>
      </button>
    </>
  );
}
