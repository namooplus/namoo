import styles from "./index.module.css";

const Sidebar = ({}: Readonly<{}>) => {
  return (
    <aside className={styles.wrapper}>
      <div className={styles.logo} />
    </aside>
  );
};

export default Sidebar;
