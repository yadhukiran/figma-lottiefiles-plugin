import React from "react";
import { mount } from "enzyme";
import SearchInput from "..";

describe("SearchInput", () => {
  const mockFn = jest.fn();
  const wrapper = mount(<SearchInput executeSearch={mockFn} />);
  const input = wrapper.find("input").at(0);

  afterEach(() => {
    mockFn.mockClear();
  });

  it("should call props.executeSearch with input value on search icon click", () => {
    input.simulate("change", { target: { value: "test search icon" } });
    wrapper.find("span").at(0).simulate("click");
    expect(mockFn).toHaveBeenCalledWith("test search icon");
  });

  it("should call props.executeSearch with input value on enter key press", () => {
    input.simulate("change", { target: { value: "test enter key" } });
    input.simulate("keyup", { key: "Enter" });
    expect(mockFn).toHaveBeenCalledWith("test enter key");
  });
});
