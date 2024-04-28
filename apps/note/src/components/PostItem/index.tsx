"use client";

import { MouseEvent, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { PostSummary } from "@/interfaces/post";
import { PostSelectionCache } from "@/utils/cache";
import { mergeStyle } from "@/utils/style";
import styles from "./index.module.css";

const PostItem = ({ id, ...post }: Readonly<PostSummary>) => {
  const { push } = useRouter();
  const { postId } = useParams();

  const postSelected = Number(postId) === id;
  const [hidden, hide] = useState(postSelected);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    PostSelectionCache.memorize({
      id,
      ...post,
      entryPosition: {
        top: rect.top,
        left: rect.left,
        bottom:
          document.documentElement.clientHeight - (rect.top + rect.height),
        right: document.documentElement.clientWidth - (rect.left + rect.width),
      },
    });

    push(`/posts/${id}`);
  };

  /**
   * Opening transition
   */
  useEffect(() => {
    if (!postSelected) return;

    hide(true);
  }, [postSelected]);

  /**
   * Closing transition
   */
  useEffect(() => {
    if (postSelected) return;

    const transitionTimer = setTimeout(() => {
      hide(false);
    }, 500);

    return () => clearTimeout(transitionTimer);
  }, [postSelected]);

  return (
    <div
      className={mergeStyle(styles.wrapper, hidden && styles.hidden)}
      onClick={handleClick}
    >
      <p className={styles.title}>{post.title}</p>
      <div className={styles.metadata}>
        <span className={styles.date}>{post.date}</span>
        <span>·</span>
        <span className={styles.category}>{post.category}</span>
        <span>·</span>
        <div className={styles.tags}>
          {post.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostItem;
