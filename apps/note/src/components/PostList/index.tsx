"use client";

import { ReactNode, useState } from "react";
import { useParams } from "next/navigation";
import PostItem from "@/components/PostItem";
import PostModal from "@/components/PostModal";
import { posts } from "@/data/post";
import styles from "./index.module.css";
import { ModalPosition } from "@/interfaces/modal";

type PostListProps = Readonly<{
  children: ReactNode;
}>;

export default function PostList({ children }: PostListProps) {
  const { postId } = useParams();
  const [previousPosition, setPreviousPosition] = useState<ModalPosition>();

  return (
    <>
      <div className={styles.wrapper}>
        {posts.map(({ id, title, date }) => (
          <PostItem
            key={id}
            id={id}
            title={title}
            date={date}
            setPreviousPosition={setPreviousPosition}
          />
        ))}
      </div>
      {postId && (
        <PostModal previousPosition={previousPosition}>{children}</PostModal>
      )}
    </>
  );
}
