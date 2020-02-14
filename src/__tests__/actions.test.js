import configureMockStore from "redux-mock-store";
import promise from "redux-promise";
import moxios from "moxios";
import expect from "expect";
import * as actions from "containers/actions";
import { getMockResponse } from "services";
import { instance } from "services/config";
const middlewares = [promise];
const mockStore = configureMockStore(middlewares);

describe("Get Products actions", () => {
  beforeEach(function() {
    moxios.install(instance);
  });

  afterEach(function() {
    moxios.uninstall(instance);
  });

  it("creates GET_DATA after successfuly fetching products", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: getMockResponse()
      });
    });

    const expectedActions = [
      { type: actions.GET_DATA, payload: getMockResponse() }
    ];

    const store = mockStore({ data: {} });

    return store.dispatch(actions.getData("B007TIE0GQ")).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
