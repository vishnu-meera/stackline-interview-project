import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "components/header";
import { findByTestArr } from "utils/functions";

Enzyme.configure({ adapter: new Adapter() });

describe("Header", () => {
  const wrapper = shallow(<App />);
  const component = findByTestArr(wrapper, "component-header");
  test("Header : render component without error", () => {
    expect(component.length).toBe(1);
  });

  test("Header : render component without error", () => {
    expect(wrapper.html().toString()).toEqual(
      '<div data-test="component-header" class="makeStyles-header-1"><div class="makeStyles-iconContainer-2"><img src="stack.png" class="makeStyles-icon-3" alt="stackline icon"/></div></div>'
    );
  });
});
