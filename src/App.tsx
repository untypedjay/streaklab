import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Settings from "./components/Settings/Settings";
import Workout from "./components/Workout/Workout";
import { fullBodyDumbbell } from "./data/workouts/fullBodyDumbbell";

export type ExerciseType = {
  name: string;
  instance?: string;
  suggestedReps?: number;
  suggestedWeight?: number;
  timeInSeconds?: number;
};

export default function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/workouts/0">
          <Workout>{fullBodyDumbbell}</Workout>
        </Route>
        <Route exact path="/settings" component={Settings} />
        <Route component={Home} />
      </Switch>
    </HashRouter>
  );
}
