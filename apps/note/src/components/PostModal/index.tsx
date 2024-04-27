"use client";

import { ReactNode, useEffect, useState } from "react";
import { Memory } from "@/components/PostItem";
import styles from "./index.module.css";
import { ModalPosition } from "@/interfaces/modal";

type PostModalProps = Readonly<{
  memory: Memory;
  children: ReactNode;
}>;

export default function PostModal({ memory, children }: PostModalProps) {
  const [position, setPosition] = useState<ModalPosition>(memory.position);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPosition({
        top: 50,
        left: 50,
        right: 50,
        bottom: 50,
      });
    }, 1000);

    () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={styles.wrapper}
      style={{
        top: position.top,
        left: position.left,
        right: position.right,
        bottom: position.bottom,
      }}
    >
      Hello
    </div>
  );
}
