import styles from "./index.module.css";

type SidebarProps = Readonly<{}>;

export default function Sidebar({}: SidebarProps) {
  return <aside className={styles.wrapper}>사이드바</aside>;
}
