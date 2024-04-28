import PostItem from "@/components/PostItem";
import { posts } from "@/data/post";
import styles from "./index.module.css";
import { IoIosArrowDown } from "react-icons/io";

const PostList = ({}: Readonly<{}>) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* Filter */}
        <div className={styles.filters}>
          <div className={styles.filter}>
            Category <IoIosArrowDown />
          </div>
          <div className={styles.filter}>
            Tags <IoIosArrowDown />
          </div>
        </div>
        {/* Content */}
        {posts.map((post) => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
