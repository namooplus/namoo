"use client";

import { ReactNode, useState } from "react";
import { useParams } from "next/navigation";
import PostItem, { Memory } from "@/components/PostItem";
import PostModal from "@/components/PostModal";
import { posts } from "@/data/post";
import styles from "./index.module.css";

type PostListProps = Readonly<{
  children: ReactNode;
}>;

export default function PostList({ children }: PostListProps) {
  const { postId } = useParams();
  const [memory, setMemory] = useState<Memory>();

  return (
    <>
      <div className={styles.wrapper}>
        {posts.map(({ id, title, content }) => (
          <PostItem
            key={id}
            id={id}
            title={title}
            content={content}
            setMemory={setMemory}
          />
        ))}
      </div>
      {postId && memory && <PostModal memory={memory}>{children}</PostModal>}
    </>
  );
}
