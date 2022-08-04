import styles from "../styles/Tasks.module.css";
import { Plus } from "phosphor-react";
import { useEffect, useRef, useState } from "react";
import { InputText } from "../components/InputText";
import { InputSwitch } from "../components/InputSwitch";

export function Tasks() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    done: false,
  });

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

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.list}>
          <h1 className={styles.title}>To Do</h1>
          <div className={styles.card}>
            <h4>Teste para a Plug</h4>
            <small>Desenvolver o teste para a Plug Pagamentos</small>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.list}>
          <h1 className={styles.title}>Done</h1>
          <div className={styles.card}>
            <h4>Teste para a Plug</h4>
            <small>Desenvolver o teste para a Plug Pagamentos</small>
          </div>
        </div>
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
      </div>
      <div
        ref={offcanvasBackdropRef}
        className={styles["offcanvas-backdrop"]}
      ></div>
    </section>
  );
}
