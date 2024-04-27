import PostItem from "@/components/PostItem";
import { posts } from "@/data/post";
import styles from "./index.module.css";

const PostList = ({}: Readonly<{}>) => {
  return (
    <div className={styles.wrapper}>
      {posts.map((post) => (
        <PostItem key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostList;
