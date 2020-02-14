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
    expect(wrapper.html().toString()).toEqual(
      '<header class="MuiPaper-root MuiAppBar-root MuiAppBar-positionFixed MuiAppBar-colorPrimary makeStyles-header-1 mui-fixed MuiPaper-elevation4" data-test="component-header"><div class="makeStyles-iconContainer-2"><img src="stack.png" class="makeStyles-icon-3"/></div></header>'
    );
  });
});
