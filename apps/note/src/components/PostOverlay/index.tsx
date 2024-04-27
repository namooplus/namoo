"use client";

import { ReactNode } from "react";
import styles from "./index.module.css";
import { useParams } from "next/navigation";
import PostModal from "@/components/PostModal";

type PostOverlayProps = Readonly<{
  children: ReactNode;
}>;

export default function PostOverlay({ children }: PostOverlayProps) {
  const { postId } = useParams();

  if (!postId) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <PostModal>{children}</PostModal>
    </div>
  );
}
