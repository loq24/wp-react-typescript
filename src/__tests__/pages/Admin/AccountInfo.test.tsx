import { ReactWrapper } from "enzyme";
import { mountByRouter, mockUser } from "utils/mock_helpers";
import AccountInfo from "pages/Admin/AccountInfo";

describe("AccountInfo component", () => {
  let wrapper: ReactWrapper;
  let path = "/account";
  beforeEach(() => {
    const initialState = {
      wp: {
        currentUser: mockUser
      }
    };
    wrapper = mountByRouter(path, initialState);
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it(`renders AccountInfo component using ${path} path`, () => {
    expect(wrapper.find(AccountInfo)).toHaveLength(1);
  });

  it("shows the user's name", () => {
    expect(wrapper.find('div[data-test="user-name"]').text()).toEqual(
      mockUser.name
    );
  });

  it("shows the user's bio", () => {
    expect(wrapper.find('div[data-test="user-bio"]').text()).toEqual(
      mockUser.description
    );
  });

  it("shows the user's website", () => {
    expect(wrapper.find('div[data-test="user-website"]').text()).toEqual(
      mockUser.url
    );
  });
});
