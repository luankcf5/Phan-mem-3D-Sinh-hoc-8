import { useEffect } from 'react';
// next
import { useRouter } from 'next/router';
// config
import { PATH_AFTER_LOGIN } from '../config-global';

// ----------------------------------------------------------------------

export default function Index() {
  const { pathname, replace, prefetch } = useRouter();

  useEffect(() => {
    replace(PATH_AFTER_LOGIN);
  }, [pathname]);

  useEffect(() => {
    prefetch(PATH_AFTER_LOGIN);
  }, []);

  return null;
}
