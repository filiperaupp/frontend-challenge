import styles from  "../styles/InputSwitch.module.css";

interface InputSwitchProps {
  label: string;
  value: boolean;
  onChange: (event: any) => void
}

export function InputSwitch(props: InputSwitchProps) {
  return (
    <div className={styles.fullInput}>
      <span className={styles.inputTitle}>{props.label}</span>
      <div className={styles.switch}>
        <input checked={props.value} onChange={props.onChange}  type="checkbox" id="switch1" className={styles.switch__input} />
        <label htmlFor="switch1" className={styles.switch__label}></label>
      </div>
    </div>
  );
}
