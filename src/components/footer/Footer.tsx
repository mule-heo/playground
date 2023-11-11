import { A } from '@solidjs/router';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer class="flex justify-center items-center min-w-screen h-9 bg-gray-800">
      <A href="https://github.com/mule-heo" class={styles.Copyright}>
        ⓒ 2023 mule-heo
      </A>
    </footer>
  );
};

export default Footer;
