import styles from "../styles/Tasks.module.css";
import { Plus } from "phosphor-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { TaskService } from "../services/task.service";
import { Task } from "../db/db.types";
import { TaskList } from "../components/TaskList";
import { OffCanvas } from "../components/OffCanvas";

export function Tasks() {
  const taskService = new TaskService();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    setLoading(true);
    taskService
      .getAll()
      .then(({ data }) => setTasks(data.tasks))
      .finally(() => setLoading(false));
  }, []);

  const [onGoingTasks, doneTasks] = useMemo(() => {
    return [
      tasks.filter((task) => !task.done) || [],
      tasks.filter((task) => task.done) || [],
    ];
  }, [tasks]);


  function openNav() {
    setShow(true);
  }

  function closeNav() {
    setShow(false);
  }

  if (loading) return <div style={{ width: "100%", textAlign: "center" }}>Carregando...</div>

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <TaskList listTitle="To Do" tasks={onGoingTasks} />
        <div className={styles.divider}></div>
        <TaskList listTitle="Done" tasks={doneTasks} />
      </div>
      <button onClick={openNav} className={styles.button}>
        <Plus size={20} weight="bold" />
        Novo
      </button>
      <OffCanvas show={show} onClose={closeNav} />
    </section>
  );
}
