import { ReactNode } from "react";
import styles from "./index.module.css";
import Link from "next/link";

type PostProps = Readonly<{
  id: number;
  title: string;
  content: string;
  children?: ReactNode;
}>;

export default function Post({ id, title, content, children }: PostProps) {
  return (
    <Link href={`/posts/${id}`}>
      <div className={styles.wrapper}>
        <p>{title}</p>
        <p>{content}</p>
        {children ? <div>{children}</div> : <div>없음</div>}
      </div>
    </Link>
  );
}
