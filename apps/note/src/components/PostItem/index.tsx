import { MouseEvent } from "react";
import styles from "./index.module.css";
import { useRouter } from "next/navigation";
import { ModalPosition } from "@/interfaces/modal";

type PostItemProps = Readonly<{
  id: number;
  title: string;
  date: string;
  setPreviousPosition: (memory: ModalPosition) => void;
}>;

export default function PostItem({
  id,
  title,
  date,
  setPreviousPosition,
}: PostItemProps) {
  const { push } = useRouter();

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setPreviousPosition({
      top: `${rect.top}px`,
      left: `${rect.left}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
    });
    push(`/posts/${id}`);
  };

  return (
    <div className={styles.wrapper} onClick={handleClick}>
      <p>{title}</p>
      <p>{date}</p>
    </div>
  );
}
