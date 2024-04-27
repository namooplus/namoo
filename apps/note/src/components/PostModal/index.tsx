"use client";

import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";
import { PostSelectionCache } from "@/utils/cache";
import styles from "./index.module.css";
import { useParams } from "next/navigation";

const popupStyle: CSSProperties = {
  top: "50px",
  left: "50px",
  bottom: "50px",
  right: "50px",
};

const PostModal = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const postSelection = PostSelectionCache.get();

  const { postId } = useParams();
  const [overlayStyle, setOverlayStyle] = useState<CSSProperties>();
  const [modalStyle, setModalStyle] = useState<CSSProperties>();
  const [open, setOpen] = useState(false);

  /**
   * Opening transition
   */

  useEffect(() => {
    if (!postId) return;

    setModalStyle(postSelection?.entryPosition ?? popupStyle);
    setOpen(true);
  }, [postId]);

  useEffect(() => {
    if (!open) return;

    setOverlayStyle({ opacity: 1 });
    setModalStyle(popupStyle);
  }, [open]);

  /**
   * Closing transition
   */
  useEffect(() => {
    if (postId) return;

    setOverlayStyle({ opacity: 0 });
    setModalStyle(postSelection?.entryPosition);

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
      <div className={styles.overlay} style={overlayStyle} />
      <div className={styles.modal} style={modalStyle}>
        <div className={styles.title}>
          <p>{postSelection?.title ?? "..."}</p>
          <p>{postSelection?.date ?? "..."}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default PostModal;
