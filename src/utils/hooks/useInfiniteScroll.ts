import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { useInfiniteScrollProps } from 'utils/models/InfiniteScrollProps.interface';

const useInfiniteScroll = (): useInfiniteScrollProps => {
  const [loading, setLoading] = useState(false);

  const loader = useRef(null);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setLoading(true);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '100px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return { loading, setLoading, loader };
};

export default useInfiniteScroll;
