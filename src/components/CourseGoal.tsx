import type { FC, PropsWithChildren } from "react";

type CourseGoalProps = PropsWithChildren<{
  title: string;
  description: string;
  onDelete: () => void;
}>;

const CourseGoal: FC<CourseGoalProps> = (props) => {
  return (
    <article>
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <button onClick={props.onDelete}>Delete</button>
    </article>
  );
};

export default CourseGoal;
