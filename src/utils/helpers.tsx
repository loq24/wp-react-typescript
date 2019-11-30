import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Root from 'Root';
import Admin from 'pages/Admin/Admin';
import { FormValues } from 'actions';
import { Location } from 'history';
import { MemoryRouter } from 'react-router-dom';

export const initialFormValues: FormValues = {
  username: 'editoruser',
  password: 'editoruserpass',
};

export const mountByRouter = (
  path: string = '/',
  initialState = {}
): ReactWrapper => {
  const mockLocation: Location = {
    pathname: path,
    hash: '',
    search: '',
    state: undefined,
  };
  return mount(
    <Root initialState={initialState}>
      <MemoryRouter initialEntries={[path]}>
        <Admin location={mockLocation} />
      </MemoryRouter>
    </Root>
  );
};
