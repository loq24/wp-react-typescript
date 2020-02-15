import { useSelector } from 'react-redux';
import { AppState } from 'reducers';

export const useMsgSelector = () => useSelector((state: AppState) => state.msg);
