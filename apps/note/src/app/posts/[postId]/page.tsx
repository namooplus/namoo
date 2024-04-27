import styles from "./page.module.css";

type PostDetailProps = Readonly<{
  params: { postId: string };
}>;

export default function PostDetailPage({ params }: PostDetailProps) {
  const postId = Number(params.postId);

  return (
    <div className={styles.wrapper}>
      <h1>포스트 {postId}</h1>
    </div>
  );
}
