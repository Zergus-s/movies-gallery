import { Dispatch, SetStateAction } from 'react';

export interface useInfiniteScrollProps {
  loading: boolean,
  setLoading: Dispatch<SetStateAction<boolean>>,
  loader: React.MutableRefObject<null>
}
