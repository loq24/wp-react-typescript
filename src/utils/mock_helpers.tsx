import React from "react";
import { mount, ReactWrapper } from "enzyme";
import { act } from "react-dom/test-utils";
import Root from "Root";
import Admin from "pages/Admin/Admin";
import { MemoryRouter } from "react-router-dom";

export const mockPosts = [
  {
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
  },
  {
    id: 2,
    title: {
      rendered: "Mock Title 2"
    },
    content: {
      rendered: "Mock Content 2"
    },
    excerpt: {
      rendered: "Mock Excerpt 2"
    },
    modified: "2019-09-10T21:37:06",
    date: "2019-09-10T21:37:069"
  }
];

export const mockUser = {
  id: 1,
  name: "Test User",
  description: "This is a test user",
  url: "https://lougiequisel.com"
};

export const mountByRouter = (
  path: string = "/",
  initialState = {}
): ReactWrapper => {
  return mount(
    <Root initialState={initialState}>
      <MemoryRouter initialEntries={[path]}>
        <Admin />
      </MemoryRouter>
    </Root>
  );
};

export const waitForComponentToPaint = async (wrapper: ReactWrapper) => {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve));
    wrapper.update();
  });
};
