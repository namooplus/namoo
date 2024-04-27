import PostItem from "@/components/PostItem";
import { posts } from "@/data/post";
import styles from "./index.module.css";

type PostListProps = Readonly<{}>;

export default function PostList({}: PostListProps) {
  return (
    <div className={styles.wrapper}>
      {posts.map((post) => (
        <PostItem key={post.id} {...post} />
      ))}
    </div>
  );
}
