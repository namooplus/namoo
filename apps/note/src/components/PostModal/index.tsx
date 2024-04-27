"use client";

import { CSSProperties, ReactNode, useEffect, useState } from "react";
import styles from "./index.module.css";
import { ModalPosition } from "@/interfaces/modal";

const progressStyle: CSSProperties = {
  top: "50%",
  left: "50%",
  width: "100px",
  height: "100px",
  transform: "translate(-50%, -50%)",
};

const loadStyle: CSSProperties = {
  top: "50px",
  left: "50px",
  width: "calc(100% - 100px)",
  height: "calc(100% - 50px)",
  transform: "none",
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
};

type PostModalProps = Readonly<{
  previousPosition?: ModalPosition;
  children: ReactNode;
}>;

export default function PostModal({
  previousPosition,
  children,
}: PostModalProps) {
  const [style, setStyle] = useState<CSSProperties>(
    previousPosition ?? progressStyle
  );
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const progressTimer = setTimeout(() => {
      setStyle(progressStyle);
    }, 0);

    const loadTimer = setTimeout(() => {
      setStyle(loadStyle);
      setLoaded(true);
    }, 1000);

    () => {
      clearTimeout(progressTimer);
      clearTimeout(loadTimer);
    };
  }, []);

  return (
    <div className={styles.wrapper} style={style}>
      {loaded ? children : "Loading..."}
    </div>
  );
}
