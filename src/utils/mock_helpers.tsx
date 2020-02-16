import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Root from 'Root';
import Admin from 'pages/Admin/Admin';
import { MemoryRouter } from 'react-router-dom';

export const mountByRouter = (
  path: string = '/',
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
