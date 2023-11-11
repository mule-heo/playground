import { A } from '@solidjs/router';
import styles from './page.module.css';

const Page = () => {
  return (
    <div class={styles.Container}>
      <A href="/">
        <p class={`absolute top-1 left-1 text-xl ${styles.TextShadow}`}>메인</p>
      </A>
      <div>I am page.</div>
    </div>
  );
};

export default Page;
