import { useSelector } from 'react-redux';
import { AppState } from 'reducers';

export const useAuthSelector = () =>
  useSelector((state: AppState) => state.auth);
