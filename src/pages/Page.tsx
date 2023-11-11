import { A, useLocation } from '@solidjs/router';
import styles from './page.module.css';
import { routes } from '../data/routing';

const Page = () => {
  const location = useLocation();
  const Children = routes[location.pathname];
  if (Children === undefined) {
    throw new Error('존재하지 않는 경로입니다.');
  }
  return (
    <>
      <A href="/">
        <p class={`absolute top-1 left-1 text-xl ${styles.TextShadow}`}>메인</p>
      </A>
      <Children />
    </>
  );
};

export default Page;
