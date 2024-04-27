"use client";

import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import { PostSelectionCache } from "@/utils/post";

const popupStyle: CSSProperties = {
  top: "50px",
  left: "50px",
  bottom: "50px",
  right: "50px",
};

type PostModalProps = Readonly<{
  children: ReactNode;
}>;

export default function PostModal({ children }: PostModalProps) {
  const postSelection = useRef(PostSelectionCache.get());

  const [style, setStyle] = useState<CSSProperties>(
    postSelection.current?.entryPosition ?? popupStyle
  );
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const transitionTimer = setTimeout(() => {
      setStyle(popupStyle);
    }, 0);

    const loadTimer = setTimeout(() => {
      setLoaded(true);
    }, 1000);

    () => {
      clearTimeout(transitionTimer);
      clearTimeout(loadTimer);
    };
  }, []);

  return (
    <div className={styles.wrapper} style={style}>
      <div className={styles.title}>
        <p>{postSelection.current?.title ?? "..."}</p>
        <p>{postSelection.current?.date ?? "..."}</p>
      </div>
      {loaded && children}
    </div>
  );
}
