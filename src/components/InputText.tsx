import styles from "../styles/InputText.module.css"

interface InputTextProps {
  label: string;
  value: any;
  onChange: (event: any) => void
}

export function InputText(props: InputTextProps) {
  return (
    <div className={styles["text-field"]}>
      <input value={props.value} type="text" required onChange={props.onChange} />
      <label>{props.label}</label>
    </div>
  );
}
