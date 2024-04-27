"use client";

import { MouseEvent } from "react";
import styles from "./index.module.css";
import { useParams, useRouter } from "next/navigation";
import { PostSelectionCache } from "@/utils/post";
import { PostSummary } from "@/interfaces/post";
import { mergeStyle } from "@/utils/style";

type PostItemProps = Readonly<PostSummary>;

export default function PostItem({ id, title, date }: PostItemProps) {
  const { push } = useRouter();
  const { postId } = useParams();

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    PostSelectionCache.memorize({
      id,
      title,
      date,
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

  return (
    <div
      className={mergeStyle(
        styles.wrapper,
        Number(postId) === id && styles.hidden
      )}
      onClick={handleClick}
    >
      <p>{title}</p>
      <p>{date}</p>
    </div>
  );
}
