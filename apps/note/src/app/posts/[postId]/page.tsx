import styles from "./page.module.css";

const PostDetailPage = ({
  params,
}: Readonly<{
  params: { postId: string };
}>) => {
  const postId = Number(params.postId);

  return (
    <div className={styles.wrapper}>
      <h1>포스트 {postId}</h1>
    </div>
  );
};

export default PostDetailPage;
