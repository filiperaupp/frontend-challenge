import { CheckCircle } from "phosphor-react";
import { useEffect, useRef } from "react";
import styles from "../styles/Toast.module.css";

interface ToastProps {
  show: boolean;
  onHide: () => void;
}

export function Toast(props: ToastProps) {
  const toastRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (props.show) {
      showToast();
      setTimeout(() => hideToast(), 4000);
    }
  }, [props.show]);

  const showToast = () => {
    const toast = toastRef.current;
    if (toast) {
      toast.style.visibility = "visible";
      toast.style.opacity = "1";
    }
  };

  const hideToast = () => {
    const toast = toastRef.current;
    if (toast) {
      toast.style.visibility = "hidden";
      toast.style.opacity = "0";
    }
    props.onHide();
  };

  return (
    <div ref={toastRef} className={styles.toast}>
      <CheckCircle size={40} />
      <div className={styles["text-box"]}>
        <p>Sucesso!</p>
        <small>Tarefa criada!</small>
      </div>
    </div>
  );
}
