import PostItem from "@/components/PostItem";
import { posts } from "@/data/post";
import styles from "./index.module.css";

const PostList = ({}: Readonly<{}>) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {posts.map((post) => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
