import { posts } from "@/data/post";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

const PostDetailPage = ({
  params,
}: Readonly<{
  params: { postId: string };
}>) => {
  const postId = Number(params.postId);

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    notFound();
  }

  return <div className={styles.wrapper}>{post.content}</div>;
};

export default PostDetailPage;
