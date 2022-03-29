import React from "react";
import { shallow } from "enzyme";

test("renders learn react link", () => {
  const wrapper = shallow(<button />);
  expect(wrapper.find("button")).toHaveLength(1);
});
