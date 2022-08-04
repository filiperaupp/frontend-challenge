import { Task } from "src/db/db.types";
import styles from "../styles/TaskList.module.css"

interface TaskListPros {
  listTitle: string;
  tasks: Task[];
}

export function TaskList(props: TaskListPros) {
  return (
    <div className={styles.list}>
      <h1 className={styles.title}>{props.listTitle}</h1>
      {props.tasks.map((task) => (
        <div key={task.id} className={styles.card}>
          <h4>{task.title}</h4>
          <small>{task.description}</small>
        </div>
      ))}
    </div>
  );
}
