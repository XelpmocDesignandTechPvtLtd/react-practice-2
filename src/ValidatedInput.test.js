import React from "react";
import ValidatedInput from "./ValidatedInput.js";
import { mount, shallow } from "enzyme";
import Input from "xelpmoc-core";

test("ValidatedInput - successfully using Input component from xelpmoc-core", () => {
  const validatedInput = mount(<ValidatedInput />);
  expect(validatedInput.find("Input")).toHaveLength(1);
});

// test.only("ValidatedInput - has default props", () => {
//   const ValidatedInput = mount(<ValidatedInput />);
//   console.log(ValidatedInput.props().errorFunc).
// });

test("ValidatedInput - validates correctly on error", () => {
  // simulate a change on the component, and set the value to be empty
  // then focus out
  const errorMsg = "Invalid input";
  const validatedInput = mount(
    <ValidatedInput
      errorFunc={val => {
        return val.length < 4;
      }}
      errorMsg={errorMsg}
    />
  );

  const input = validatedInput.find("input");

  input.simulate("change", { target: { value: "123" } });
  expect(validatedInput.state().hasError).toBe(true);
  expect(validatedInput.find(".error").length).toBe(1);
});
