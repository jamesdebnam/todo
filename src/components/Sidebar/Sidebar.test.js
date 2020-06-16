import React from "react";
import Sidebar from "./Sidebar";
import { shallow } from "enzyme";

describe("Tests for sidebar component", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Sidebar />);
  });

  it("renders sidebar filter list", () => {
    expect(wrapper.find("ul.sidebar--filter")).toHaveLength(1);
  });

  it("renders 3 filters inside filter list", () => {
    expect(wrapper.find("ul.sidebar--filter").children()).toHaveLength(3);
  });

  it("renders All Tasks for first child of filter list", () => {
    expect(wrapper.find("ul.sidebar--filter").childAt(0).text()).toBe(
      "All Tasks"
    );
  });

  it("renders Important for first child of filter list", () => {
    expect(wrapper.find("ul.sidebar--filter").childAt(1).text()).toBe(
      "Important"
    );
  });

  it("renders Completed for first child of filter list", () => {
    expect(wrapper.find("ul.sidebar--filter").childAt(2).text()).toBe(
      "Completed"
    );
  });

  it("renders icon for each filter item", () => {
    wrapper
      .find("ul.sidebar--filter")
      .children()
      .forEach((item) => {
        expect(item.childAt(1).type()).toBe("svg");
      });
  });

  it("renders todo list group ul", () => {
    expect(wrapper.find("ul.sidebar--groups")).toHaveLength(1);
  });
});
