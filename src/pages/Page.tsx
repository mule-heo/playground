import { A, useLocation } from '@solidjs/router';
import styles from './page.module.css';
import { routes } from '../data/routing';

function isKeyofRoutes(value: unknown): asserts value is keyof typeof routes {
  if (typeof value !== 'string' || !(value in routes))
    throw new Error('존재하지 않는 페이지입니다.');
}

const Page = () => {
  const location = useLocation();
  const pathname = location.pathname;
  isKeyofRoutes(pathname);
  const Children = routes[pathname];
  return (
    <>
      <A href="/">
        <p
          class={`absolute top-1 left-1 text-xl ${styles.TextShadow} italic text-base`}
        >
          메인
        </p>
      </A>
      <Children />
    </>
  );
};

export default Page;
