"use client";

import { ReactNode } from "react";
import { useParams, useRouter } from "next/navigation";
import Post from "@/components/Post";
import { posts } from "@/data/post";
import styles from "./index.module.css";

type PostListProps = Readonly<{
  children: ReactNode;
}>;

export default function PostList({ children }: PostListProps) {
  const { postId } = useParams();

  return (
    <div className={styles.wrapper}>
      {posts.map(({ id, title, content }) => (
        <Post
          key={id}
          id={id}
          title={title}
          content={content}
          {...(Number(postId) === id && { children })}
        />
      ))}
    </div>
  );
}
