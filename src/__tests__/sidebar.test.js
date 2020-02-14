import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "components/sidebar";
import { findByTestArr } from "utils/functions";

Enzyme.configure({ adapter: new Adapter() });

describe("Sidebar", () => {
  const wrapper = shallow(<App />);
  const component = findByTestArr(wrapper, "component-sidebar");
  test("Sidebar : render component without error", () => {
    expect(component.length).toBe(1);
  });

  test("Sidebar : render component without error", () => {
    expect(wrapper.html().toString()).toEqual("");
  });
});
