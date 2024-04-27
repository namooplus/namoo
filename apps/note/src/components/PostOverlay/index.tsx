"use client";

import { ReactNode } from "react";
import { useParams } from "next/navigation";
import PostModal from "@/components/PostModal";
import styles from "./index.module.css";

const PostOverlay = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const { postId } = useParams();

  if (!postId) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <PostModal>{children}</PostModal>
    </div>
  );
};

export default PostOverlay;
