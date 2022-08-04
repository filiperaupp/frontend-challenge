import "../styles/InputSwitch.css";

interface InputSwitchProps {
  label: string;
  value: boolean;
  onChange: (event: any) => void
}

export function InputSwitch(props: InputSwitchProps) {
  return (
    <div className="fullInput">
      <span className="inputTitle">{props.label}</span>
      <div className="switch">
        <input checked={props.value} onChange={props.onChange}  type="checkbox" id="switch1" className="switch__input" />
        <label htmlFor="switch1" className="switch__label"></label>
      </div>
    </div>
  );
}
