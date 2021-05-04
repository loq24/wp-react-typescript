import AddNew from "pages/Admin/AddNew/AddNew";
import { mountByRouter } from "utils/mock_helpers";
import { ReactWrapper } from "enzyme";
import { waitForComponentToPaint } from "utils/mock_helpers";

describe("AddNew Component", () => {
  let wrapper: ReactWrapper;
  let path = "/add-new";
  const mockMsg = {
    msg: {
      success: "Post was successfully added"
    }
  };

  beforeEach(() => {
    wrapper = mountByRouter(path, mockMsg);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("renders the Add New Form", () => {
    expect(wrapper.find(AddNew)).toHaveLength(1);
  });

  it("has heading", () => {
    expect(wrapper.find('[data-test="addnew-heading"]')).toHaveLength(1);
  });

  describe("Add New Form", () => {
    it("has a title field", () => {
      expect(wrapper.find('input[name="title"]')).toHaveLength(1);
    });

    it("has a content field", () => {
      expect(wrapper.find('textarea[name="content"]')).toHaveLength(1);
    });

    it("successfully submits the form", async () => {
      expect(wrapper.find('span[data-test="submitting"]')).toHaveLength(0);
      wrapper.find("form").simulate("submit", {
        preventDefault: () => {}
      });

      expect(wrapper.find('span[data-test="submitting"]')).toHaveLength(1);
      expect(
        wrapper.find('button[type="submit"]').props().disabled
      ).toBeTruthy();

      await waitForComponentToPaint(wrapper);
    });

    it("displays success message", () => {
      expect(wrapper.find('div[data-test="add-successful-msg"]')).toHaveLength(
        1
      );
    });
  });
});
