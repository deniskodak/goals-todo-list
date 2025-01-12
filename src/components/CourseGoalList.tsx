import { type FC } from "react";
import { type CourseGoal as CGoal } from "../interfaces/Course";
import CourseGoal from "./CourseGoal";

type CourseGoalProps = {
  goals: CGoal[];
  onDelete: (id: string) => void;
};

const CourseGoalList: FC<CourseGoalProps> = (props) => {
  return (
    <ul>
      {props.goals.map((course) => (
        <li key={course.id}>
          <CourseGoal
            onDelete={props.onDelete.bind(null, course.id)}
            title={course.title}
            description={course.text}
          />
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
