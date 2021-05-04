import Edit from "pages/Admin/Post/Edit/Edit";
import EditForm from "pages/Admin/Post/Edit/EditForm";
import { mountByRouter, waitForComponentToPaint } from "utils/mock_helpers";
import { ReactWrapper } from "enzyme";
import moxios from "moxios";
import { Post } from "actions";

describe("Edit Component", () => {
  let wrapper: ReactWrapper;
  let mockPost: Post;
  const path = "/post/edit/1";
  const mockMsg = {
    msg: {
      success: "Post was successfully updated"
    }
  };
  beforeEach(() => {
    moxios.install();
    wrapper = mountByRouter(path, mockMsg);
  });
  afterEach(() => {
    moxios.uninstall();
    wrapper.unmount();
  });

  it(`renders the Edit component using ${path} path`, () => {
    expect(wrapper.find(Edit)).toHaveLength(1);
  });

  it("fetches Post data to be edited", (done) => {
    mockPost = {
      id: 1,
      title: {
        rendered: "Mock Title 1"
      },
      content: {
        rendered: "Mock Content 1"
      },
      excerpt: {
        rendered: "Mock Excerpt 1"
      },
      modified: "2019-09-10T21:37:06",
      date: "2019-09-10T21:37:069"
    };
    moxios.wait(function () {
      let request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: mockPost
        })
        .then(function () {
          wrapper.update();
          expect(wrapper.find('input[name="title"]')).toHaveLength(1);
          expect(wrapper.find('textarea[name="content"]')).toHaveLength(1);
          done();
        });
    });
  });

  it("renders EditForm component", () => {
    expect(wrapper.find(EditForm)).toHaveLength(1);
  });

  describe("EditForm Component", () => {
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
      expect(wrapper.find('div[data-test="edit-successful-msg"]')).toHaveLength(
        1
      );
    });
  });
});
