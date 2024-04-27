import { MouseEvent, MouseEventHandler } from "react";
import styles from "./index.module.css";
import { useRouter } from "next/navigation";
import { ModalPosition } from "@/interfaces/modal";

export type Memory = {
  title: string;
  content: string;
  position: ModalPosition;
};

type PostItemProps = Readonly<{
  id: number;
  title: string;
  content: string;
  setMemory: (memory: Memory) => void;
}>;

export default function PostItem({
  id,
  title,
  content,
  setMemory,
}: PostItemProps) {
  const { push } = useRouter();

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setMemory({
      title,
      content,
      position: {
        top: rect.top,
        left: rect.left,
        right: rect.right,
        bottom: rect.bottom,
      },
    });
    push(`/posts/${id}`);
  };

  return (
    <div className={styles.wrapper} onClick={handleClick}>
      <p>{title}</p>
      <p>{content}</p>
    </div>
  );
}
