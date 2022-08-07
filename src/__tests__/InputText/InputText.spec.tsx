import { useState } from "react";
import { fireEvent, render } from "@testing-library/react";
import { InputText } from "../../components/InputText";

function MountInput() {
  const [title, setTitle] = useState("");

  return <InputText value={title} label="Input Test" onChange={(event) => setTitle(event.target.value)} required/>
}

const setup = () => {
  const component = render(<MountInput />)
  const input = component.getByTestId("input-text") as HTMLInputElement;

  return {
    component,
    input,
  };
};

describe("InputText message error", () => {
  it("Should render error message when required and empty on blur", () => {
    const { component, input } = setup();

    fireEvent.change(input, { target: { value: "" } });
    fireEvent.blur(input);
    const textError = component.queryByTestId("input-text-error");
    expect(textError).not.toBeNull()
  });

  it("Should not render error message when required and dirty on blur", () => {
    const { component, input } = setup();

    fireEvent.change(input, { target: { value: "Test" } });
    fireEvent.blur(input);
    const textError = component.queryByTestId("input-text-error");
    expect(textError).toBeNull();
  });
});
