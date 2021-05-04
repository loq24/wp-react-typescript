import React from "react";
import { mount, ReactWrapper } from "enzyme";
import Root from "Root";
import SignInForm from "pages/SignIn/SignInForm";
import { initialFormValues } from "utils/helpers";
import { waitForComponentToPaint } from "utils/mock_helpers";

describe("SignIn Form Component", () => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    wrapper = mount(
      <Root>
        <SignInForm accessValues={initialFormValues} />
      </Root>
    );
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it("shows warning message when the input is wrong", () => {
    wrapper.unmount();
    const mockMsg = {
      msg: {
        warning: "Username or password is incorrect."
      }
    };
    wrapper = mount(
      <Root initialState={mockMsg}>
        <SignInForm accessValues={initialFormValues} />
      </Root>
    );
    expect(wrapper.find('div[data-test="warning-msg"]')).toHaveLength(1);
  });

  it("shows a message after logging out", () => {
    wrapper.unmount();
    const mockMsg = {
      msg: {
        success: "Thanks for trying the app."
      }
    };
    wrapper = mount(
      <Root initialState={mockMsg}>
        <SignInForm accessValues={initialFormValues} />
      </Root>
    );
    expect(wrapper.find('div[data-test="ty-msg"]')).toHaveLength(1);
  });

  it("successfully submits", async () => {
    expect(wrapper.find('span[data-test="submitting"]')).toHaveLength(0);
    wrapper.find("form").simulate("submit", {
      preventDefault: () => {}
    });

    await waitForComponentToPaint(wrapper);

    expect(wrapper.find('span[data-test="submitting"]')).toHaveLength(1);
    expect(wrapper.find('button[type="submit"]').props().disabled).toBeTruthy();
  });

  describe("Username Field", () => {
    let usernameField: any;
    let fieldName: string;
    beforeEach(() => {
      fieldName = "username";
      usernameField = wrapper.find(`input[name="${fieldName}"]`);
    });

    it("has a correct default username value", () => {
      expect(usernameField.props().value).toEqual(initialFormValues.username);
    });

    it("should update an input when it is changed", async () => {
      const testFieldValue = "testusernamevalue";
      usernameField.simulate("change", {
        persist: () => {},
        target: {
          name: fieldName,
          value: testFieldValue
        }
      });

      await waitForComponentToPaint(wrapper);

      expect(wrapper.find(`input[name="${fieldName}"]`).props().value).toEqual(
        testFieldValue
      );
    });
  });

  describe("Password Field", () => {
    let passwordField: any;
    let fieldName: string;
    beforeEach(() => {
      fieldName = "password";
      passwordField = wrapper.find(`input[name="${fieldName}"]`);
    });

    it("it has a correct default password value", () => {
      expect(passwordField.props().value).toEqual(initialFormValues.password);
    });

    it("should update an input when it is changed", async () => {
      const testFieldValue = "testpasswordvalue";
      passwordField.simulate("change", {
        persist: () => {},
        target: {
          name: fieldName,
          value: testFieldValue
        }
      });
      await waitForComponentToPaint(wrapper);

      expect(wrapper.find(`input[name="${fieldName}"]`).props().value).toEqual(
        testFieldValue
      );
    });
  });
});
