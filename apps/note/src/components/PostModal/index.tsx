"use client";

import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";
import { PostSelectionCache } from "@/utils/cache";
import styles from "./index.module.css";
import { useParams } from "next/navigation";
import { generatePostModalStyle } from "@/utils/style";

const PostModal = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const postSelection = PostSelectionCache.get();

  const { postId } = useParams();
  const [style, setStyle] = useState<Record<string, CSSProperties>>({});
  const [open, setOpen] = useState(false);

  /**
   * Opening transition
   */

  useEffect(() => {
    if (!postId) return;

    setStyle(
      generatePostModalStyle({
        state: "closed",
        entryPosition: postSelection?.entryPosition,
      })
    );
    setOpen(true);
  }, [postId]);

  useEffect(() => {
    if (!open) return;

    setStyle(generatePostModalStyle({ state: "open" }));
  }, [open]);

  /**
   * Closing transition
   */
  useEffect(() => {
    if (postId) return;

    setStyle(
      generatePostModalStyle({
        state: "closed",
        entryPosition: postSelection?.entryPosition,
      })
    );

    const transitionTimer = setTimeout(() => {
      setOpen(false);
    }, 500);

    return () => clearTimeout(transitionTimer);
  }, [postId]);

  if (!open) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.overlay} style={style.overlay} />
      <div className={styles.floating} style={style.floating}>
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.title}>{postSelection?.title ?? "..."}</p>
          <div className={styles.metadata}>
            <span>{postSelection?.date ?? "..."}</span>
            <span>·</span>
            <div className={styles.tags}>
              <span className={styles.category}>
                {postSelection?.category ?? "..."}
              </span>
              {postSelection?.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* Content */}
        {children}
      </div>
    </div>
  );
};

export default PostModal;
