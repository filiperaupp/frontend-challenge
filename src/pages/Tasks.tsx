import styles from "../styles/Tasks.module.css";
import { Plus } from "phosphor-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { InputText } from "../components/InputText";
import { InputSwitch } from "../components/InputSwitch";
import { TaskService } from "../services/task.service";
import { Task } from "src/db/db.types";
import { TaskList } from "../components/TaskList";

export function Tasks() {
  const taskService = new TaskService();
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    done: false,
  });

  useEffect(() => {
    setLoading(true);
    taskService
      .getAll()
      .then(({ data }) => setTasks(data.tasks))
      .finally(() => setLoading(false));
  }, []);

  const [onGoingTasks, doneTasks] = useMemo(() => {
    console.log(tasks);
    return [
      tasks.filter((task) => !task.done) || [],
      tasks.filter((task) => task.done) || [],
    ];
  }, [tasks]);

  const handleInputTitle = (event: any) => {
    const value = event.target.value;
    setForm({ ...form, title: value });
  };

  const handleInputDescription = (event: any) => {
    const value = event.target.value;
    setForm({ ...form, description: value });
  };

  const handleInputDone = (event: any) => {
    const value = event.target.checked;
    setForm({ ...form, done: value });
  };

  const sidenavRef = useRef<HTMLDivElement>(null);
  const offcanvasBackdropRef = useRef<HTMLDivElement>(null);

  function openNav() {
    const sidenav = sidenavRef.current;
    if (sidenav) sidenav.style.width = "380px";

    const offcanvasBackdrop = offcanvasBackdropRef.current;
    if (offcanvasBackdrop) {
      offcanvasBackdrop.style.visibility = "visible";
      offcanvasBackdrop.style.opacity = "0.95";
    }
  }

  function closeNav() {
    const sidenav = sidenavRef.current;
    if (sidenav) sidenav.style.width = "0px";

    const offcanvasBackdrop = offcanvasBackdropRef.current;
    if (offcanvasBackdrop) {
      offcanvasBackdrop.style.visibility = "hidden";
      offcanvasBackdrop.style.opacity = "0";
    }
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
      <div id="sidenav" ref={sidenavRef} className={styles.sidenav}>
        <a className={styles.closebtn} onClick={closeNav}>
          &times;
        </a>
        <hr />
        <div style={{ padding: "2rem" }}>
          <InputText
            label="Título"
            value={form.title}
            onChange={handleInputTitle}
          ></InputText>
          <InputText
            label="Descrição"
            value={form.description}
            onChange={handleInputDescription}
          ></InputText>
          <InputSwitch
            label="Done"
            value={form.done}
            onChange={handleInputDone}
          ></InputSwitch>
        </div>
        {onGoingTasks.map((task) => JSON.stringify(task))}
        {doneTasks.map((task) => JSON.stringify(task))}
      </div>
      <div
        ref={offcanvasBackdropRef}
        className={styles["offcanvas-backdrop"]}
      ></div>
    </section>
  );
}
