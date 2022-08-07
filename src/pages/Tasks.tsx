import styles from "../styles/Tasks.module.css";
import { Plus } from "phosphor-react";
import { useEffect, useMemo, useState } from "react";
import { TaskService } from "../services/task.service";
import { Task } from "../db/db.types";
import { TaskList } from "../components/TaskList";
import { OffCanvas } from "../components/OffCanvas";
import { Toast } from "../components/Toast";

export function Tasks() {
  const taskService = new TaskService();
  const [show, setShow] = useState(false);
  const [toast, setToast] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    taskService.getAll().then(({ data }) => setTasks(data.tasks));
  }, []);

  const [onGoingTasks, doneTasks] = useMemo(() => {
    return [
      tasks.filter((task) => !task.done) || [],
      tasks.filter((task) => task.done) || [],
    ];
  }, [tasks]);

  const addTask = ({ id, title, description, done }: Task) => {
    setTasks([...tasks, { id, title, description, done }]);
    showToast();
  };

  function openNav() {
    setShow(true);
  }

  function closeNav() {
    setShow(false);
  }

  function showToast() {
    setToast(true);
  }

  function hideToast() {
    setToast(false);
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <TaskList listTitle="To Do" tasks={onGoingTasks} type="todo" />
        <div className={styles.divider}></div>
        <TaskList listTitle="Done" tasks={doneTasks} type="done" />
      </div>
      <button onClick={openNav} className={styles.button}>
        <Plus size={20} weight="bold" />
        Novo
      </button>
      <OffCanvas show={show} onClose={closeNav} addTask={addTask} />
      <Toast show={toast} onHide={hideToast} />
    </section>
  );
}
