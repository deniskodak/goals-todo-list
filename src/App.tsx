import { useState } from "react";
import { type CourseGoal } from "./interfaces/Course";
import headerImg from "./assets/goals.jpg";
import Header from "./components/Header";
import CourseGoalList from "./components/CourseGoalList";
import NewGoalForm, { type NewGoalFormValues } from "./components/NewGoalForm";
import InfoBox from "./components/InfoBox";

const MAX_GOAL_AMOUNT = 4;

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleDeleteGoal = (id: string) => {
    setGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== id);
    });
  };

  const handleAddGoal = (values: NewGoalFormValues) => {
    setGoals((prevGoals) => {
      const goal: CourseGoal = {
        id: new Date().getMilliseconds().toString(),
        title: values.goal,
        text: values.description,
      };

      return prevGoals.concat(goal);
    });
  };

  return (
    <main className="App">
      <Header image={{ src: headerImg, alt: "A list of goals" }}>
        <h1>Your course goals</h1>
      </Header>
      <NewGoalForm onAdd={handleAddGoal} />
      {goals.length === 0 && (
        <InfoBox>
          <p>No goals found. Maybe add one?</p>
        </InfoBox>
      )}
      {goals.length >= MAX_GOAL_AMOUNT && (
        <InfoBox type="warning" severity="medium">
          <p>
            You`re collecting too much goals. Don`t put too much on your plate.
          </p>
        </InfoBox>
      )}
      <CourseGoalList goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
}

export default App;
