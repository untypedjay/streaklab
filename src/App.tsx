import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Settings from "./components/Settings/Settings";
import Statistics from "./components/Statistics/Statistics";
import Success from "./components/Success/Success";
import Workout from "./components/Workout/Workout";
import { fullBodyDumbbell } from "./data/workouts/fullBodyDumbbell";
import useLocalStorage from "./hooks/useLocalStorage";

export type ExerciseType = {
  name: string;
  instance?: string;
  suggestedReps?: number;
  suggestedWeight?: number;
  timeInSeconds?: number;
};

export default function App() {
  const [workoutData, setWorkoutData] = useLocalStorage('fullbodyDumbbell', [fullBodyDumbbell]);

  const addCompletedWorkout = (workout: ExerciseType[]) => {
    setWorkoutData(workoutData.concat([workout]));
  }

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/visitors">
          <Home showVisitors />
        </Route>
        <Route exact path="/workouts/0">
          <Workout addCompletedWorkout={addCompletedWorkout}>{workoutData[workoutData.length - 1]}</Workout>
        </Route>
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/statistics" >
          <Statistics>{workoutData}</Statistics>
        </Route>
        <Route exact path="/success" component={Success} />
        <Route component={Home} />
      </Switch>
    </HashRouter>
  );
}
