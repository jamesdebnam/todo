import React from "react";
import configureStore from "redux-mock-store";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { Sidebar } from "./Sidebar";
import { filterTodos } from "../../actions";
import activeTodosReducer from "../../reducers/activeTodosReducer";

describe("Tests for sidebar component", () => {
  let wrapper, statefulWrapper, store;

  //A fake store state to use for testing
  let initialState = {
    todos: [
      {
        item: "test1",
        ticked: false,
        starred: false,
        key: 0,
      },
      {
        item: "test2",
        ticked: false,
        starred: true,
        key: 1,
      },
      {
        item: "test3",
        ticked: false,
        starred: false,
        key: 2,
      },
    ],
    activeTodos: [
      {
        item: "test1",
        ticked: false,
        starred: false,
        key: 0,
      },
      {
        item: "test2",
        ticked: false,
        starred: true,
        key: 1,
      },
      {
        item: "test3",
        ticked: false,
        starred: false,
        key: 2,
      },
    ],
  };

  beforeAll(() => {
    let mockStore = configureStore([thunk]);
    store = mockStore(initialState);
    statefulWrapper = mount(
      <Provider store={store} filterTodos={filterTodos}>
        <Sidebar />
      </Provider>
    );
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

  it("dispatches filterTodos action object correctly", () => {
    store.dispatch(filterTodos({ starred: true }));
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "FILTER_TODOS",
      payload: [
        {
          item: "test1",
          key: 0,
          starred: false,
          ticked: false,
        },
        {
          item: "test2",
          key: 1,
          starred: true,
          ticked: false,
        },
        {
          item: "test3",
          key: 2,
          starred: false,
          ticked: false,
        },
      ],
      term: { starred: true },
    });
  });

  it("filter reducer filters by starred", () => {
    let receivedState = activeTodosReducer(initialState, {
      type: "FILTER_TODOS",
      payload: [
        {
          item: "test1",
          key: 0,
          starred: false,
          ticked: false,
        },
        {
          item: "test2",
          key: 1,
          starred: true,
          ticked: false,
        },
        {
          item: "test3",
          key: 2,
          starred: false,
          ticked: false,
        },
      ],
      term: { starred: true },
    });

    let expectedState = [
      {
        item: "test2",
        ticked: false,
        starred: true,
        key: 1,
      },
    ];

    expect(receivedState).toEqual(expectedState);
  });

  it("filter reducer filters by ticked", () => {
    let receivedState = activeTodosReducer(initialState, {
      type: "FILTER_TODOS",
      payload: [
        {
          item: "test1",
          key: 0,
          starred: false,
          ticked: true,
        },
        {
          item: "test2",
          key: 1,
          starred: true,
          ticked: false,
        },
        {
          item: "test3",
          key: 2,
          starred: false,
          ticked: false,
        },
      ],
      term: { ticked: true },
    });

    let expectedState = [
      {
        item: "test1",
        ticked: true,
        starred: false,
        key: 0,
      },
    ];

    expect(receivedState).toEqual(expectedState);
  });

  it("filter reducer filters by all", () => {
    let receivedState = activeTodosReducer(initialState, {
      type: "FILTER_TODOS",
      payload: [
        {
          item: "test1",
          key: 0,
          starred: false,
          ticked: false,
        },
        {
          item: "test2",
          key: 1,
          starred: true,
          ticked: false,
        },
        {
          item: "test3",
          key: 2,
          starred: false,
          ticked: false,
        },
      ],
      term: {},
    });

    let expectedState = [
      {
        item: "test1",
        key: 0,
        starred: false,
        ticked: false,
      },
      {
        item: "test2",
        key: 1,
        starred: true,
        ticked: false,
      },
      {
        item: "test3",
        key: 2,
        starred: false,
        ticked: false,
      },
    ];

    expect(receivedState).toEqual(expectedState);
  });

  it("renders todo list group ul", () => {
    expect(wrapper.find("ul.sidebar--groups")).toHaveLength(1);
  });
});
