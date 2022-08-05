import { useEffect, useRef, useState } from "react";
import styles from "../styles/OffCanvas.module.css";
import { InputSwitch } from "./InputSwitch";
import { InputText } from "./InputText";

interface OffCanvasProps {
  show: boolean;
  onClose: () => void;
}

export function OffCanvas(props: OffCanvasProps) {
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


  return (
    <div>
      <div id="sidenav" ref={sidenavRef} className={styles.sidenav}>
        <a className={styles.closebtn} onClick={closeNav}>
          &times;
        </a>
        <hr />
        <div style={{ padding: "2rem" }}>
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
        </div>
      </div>

      <div
        ref={offcanvasBackdropRef}
        className={styles["offcanvas-backdrop"]}
      ></div>
    </div>
  );
}
