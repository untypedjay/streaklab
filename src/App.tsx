import { useEffect, useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import Settings from './components/Settings/Settings';
import Statistics from './components/Statistics/Statistics';
import Success from './components/Success/Success';
import Workout from './components/Workout/Workout';
import { fullBodyDumbbell } from './data/workouts/fullBodyDumbbell';
import useLocalStorage from './hooks/useLocalStorage';
import { supabase } from './supabaseClient';

export type ExerciseType = {
  name: string;
  instance?: string;
  suggestedReps?: number;
  suggestedWeight?: number;
  timeInSeconds?: number;
};

export default function App() {
  const [workoutData, setWorkoutData] = useLocalStorage('fullbodyDumbbell', [
    fullBodyDumbbell,
  ]);
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    })
  }, []);

  const addCompletedWorkout = (workout: ExerciseType[]) => {
    setWorkoutData(workoutData.concat([workout]));
  };

  return (
    <>
      {!session ? <Auth /> :
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/visitors">
              <Home showVisitors />
            </Route>
            <Route exact path="/workouts/0">
              <Workout addCompletedWorkout={addCompletedWorkout}>
                {workoutData[workoutData.length - 1]}
              </Workout>
            </Route>
            <Route exact path="/settings">
              <Settings session={session} />
            </Route>
            <Route exact path="/statistics">
              <Statistics session={session} />
            </Route>
            <Route exact path="/success" component={Success} />
            <Route component={Home} />
          </Switch>
        </HashRouter>
      }
    </>
  );
}
