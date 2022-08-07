import { useMemo, useState } from "react";
import styles from "../styles/InputText.module.css";

interface InputTextProps {
  label: string;
  value: any;
  onChange: (event: any) => void;
  required?: boolean;
}

export function InputText(props: InputTextProps) {
  const [hasError, setHasError] = useState(false);

  const inputClass = useMemo(() => {
    return hasError ? styles.error : "";
  }, [hasError]);

  const isValid = () => {
    if (!props.required) return;
    if (props.required && !props.value) setHasError(true);
    else setHasError(false);
  };

  return (
    <div className={`${styles["text-field"]} ${inputClass}`}>
      <input
        value={props.value}
        type="text"
        required={props.required}
        onChange={props.onChange}
        onBlur={isValid}
        onFocus={() => setHasError(false)}
      />
      <label>{props.label}</label>
      {hasError && <small>{props.label} é obrigatório</small>}
    </div>
  );
}
