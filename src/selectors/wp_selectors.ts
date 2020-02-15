import { useSelector } from 'react-redux';
import { AppState } from 'reducers';

export const useWpSelector = () => useSelector((state: AppState) => state.wp);
