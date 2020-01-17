import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Root from 'Root';
import Admin from 'pages/admin/Admin';
import { FormValues } from 'actions';
import { MemoryRouter } from 'react-router-dom';

export const initialFormValues: FormValues = {
  username: 'editoruser',
  password: 'editoruserpass'
};

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
