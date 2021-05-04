import React from "react";
import { mount, ReactWrapper } from "enzyme";
import Root from "Root";
import SignIn from "pages/SignIn/SignIn";
import SignInForm from "pages/SignIn/SignInForm";
import Toggle from "components/Toggle/Toggle";

describe("SignIn component", () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(
      <Root>
        <SignIn />
      </Root>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("shows the username & password", () => {
    expect(wrapper.find('[data-test="username-txt"]')).toHaveLength(1);
    expect(wrapper.find('[data-test="password-txt"]')).toHaveLength(1);
  });

  it("shows the sign in form", () => {
    expect(wrapper.find(SignInForm)).toHaveLength(1);
  });

  it("shows the Toggle component", () => {
    expect(wrapper.find(Toggle)).toHaveLength(1);
  });
});
