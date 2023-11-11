import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer class="flex justify-center items-center min-w-full h-9 bg-gray-800">
      <a href="https://github.com/mule-heo" class={styles.Copyright}>
        ⓒ 2023 mule-heo
      </a>
    </footer>
  );
};

export default Footer;
