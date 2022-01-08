import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../redux/products/products-reducer';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
