import { useSelector } from 'react-redux';
import { AppState } from 'reducers';

export const useAuthSelector = () =>
  useSelector((state: AppState) => state.auth);
export const useMsgSelector = () => useSelector((state: AppState) => state.msg);
export const useWpSelector = () => useSelector((state: AppState) => state.wp);
