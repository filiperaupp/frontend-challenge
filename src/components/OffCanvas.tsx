import { useEffect, useRef, useState } from "react";
import { TaskService } from "../services/task.service";
import styles from "../styles/OffCanvas.module.css";
import { InputSwitch } from "./InputSwitch";
import { InputText } from "./InputText";

interface OffCanvasProps {
  show: boolean;
  onClose: () => void;
  addTask: (task: any) => void;
}

export function OffCanvas(props: OffCanvasProps) {
  const taskService = new TaskService();
  const sidenavRef = useRef<HTMLDivElement>(null);
  const offcanvasBackdropRef = useRef<HTMLDivElement>(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (props.show) {
      openNav();
    }
  }, [props.show]);

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
    props.onClose();
  }

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (title) {
      taskService
        .create({ title, description, done })
        .then(({ data }) => props.addTask(data.task))
        .finally(() => closeNav());
    }
  };

  return (
    <div>
      <div id="sidenav" ref={sidenavRef} className={styles.sidenav}>
        <div className={styles.top}>
          <a className={styles.closebtn} onClick={closeNav}>
            &times;
          </a>
          <h1>Nova Tarefa</h1>
        </div>
        <div className={styles.content}>
          <form id="taskForm" onSubmit={onSubmit}>
            <InputText
              label="Título"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            ></InputText>
            <InputText
              label="Descrição"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            ></InputText>
            <InputSwitch
              label="Done"
              value={done}
              onChange={(event) => setDone(event.target.checked)}
            ></InputSwitch>
          </form>
        </div>
        <div className={styles.bottom}>
          <button className={styles.submit} form="taskForm" type="submit">
            Criar Tarefa
          </button>
        </div>
      </div>

      <div
        ref={offcanvasBackdropRef}
        className={styles["offcanvas-backdrop"]}
        onClick={closeNav}
      ></div>
    </div>
  );
}
