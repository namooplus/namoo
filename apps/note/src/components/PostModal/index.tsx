"use client";

import { ReactNode, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { useParams, useRouter } from "next/navigation";
import { createPostModalOriginStyle, postModalStyle } from "@/data/modal";
import useOriginatedModal from "@/hooks/useOriginatedModal";
import { PostSelectionCache } from "@/utils/cache";
import styles from "./index.module.css";

const PostModal = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const { back } = useRouter();
  const { postId } = useParams();
  const { open, close, style, isOpen } = useOriginatedModal({
    modalStyle: postModalStyle,
    duration: 500,
  });

  const postSelection = PostSelectionCache.get();

  const handleClose = () => {
    back();
  };

  /**
   * Opening transition
   */
  useEffect(() => {
    if (!postId) return;

    const originPosition = postSelection?.entryPosition;
    const originStyle =
      originPosition && createPostModalOriginStyle(originPosition);

    open(originStyle);
  }, [postId]);

  /**
   * Closing transition
   */
  useEffect(() => {
    if (postId) return;

    const originPosition = postSelection?.entryPosition;
    const originStyle =
      originPosition && createPostModalOriginStyle(originPosition);

    close(originStyle);
  }, [postId]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.overlay}
        style={style.overlay}
        onClick={handleClose}
      />
      <div className={styles.floating} style={style.floating}>
        {/* Header */}
        <div className={styles.header} style={style.header}>
          <p className={styles.title} style={style.title}>
            {postSelection?.title ?? "..."}
          </p>
          <div className={styles.metadata} style={style.metadata}>
            <span className={styles.date} style={style.date}>
              {postSelection?.date ?? "..."}
            </span>
            <span>·</span>
            <span className={styles.category} style={style.category}>
              {postSelection?.category ?? "..."}
            </span>
            <span>·</span>
            <div className={styles.tags}>
              {postSelection?.tags.map((tag) => (
                <span key={tag} className={styles.tag} style={style.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* Content */}
        {children}
        {/* Close */}
        <button
          className={styles.close}
          style={style.close}
          onClick={handleClose}
        >
          <IoMdClose size={20} />
        </button>
      </div>
    </div>
  );
};

export default PostModal;
