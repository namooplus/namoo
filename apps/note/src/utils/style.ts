import { Position } from "@/interfaces/layout";
import { CSSProperties } from "react";

export const mergeStyle = (
  ...styles: (string | null | undefined | false)[]
) => {
  const validStyles = styles.filter((style): style is string => !!style);

  return validStyles.join(" ");
};

export const generatePostModalStyle = ({
  state,
  entryPosition,
}: {
  state: "open" | "closed";
  entryPosition?: Position;
}): Record<string, CSSProperties> => {
  if (state === "closed" && entryPosition) {
    return {
      overlay: {
        opacity: 0,
      },
      floating: {
        top: `${entryPosition.top}px`,
        left: `${entryPosition.left}px`,
        bottom: `${entryPosition.bottom}px`,
        right: `${entryPosition.right}px`,
        borderRadius: "10px",
        backgroundColor: "#00000010",
      },
      header: {
        gap: "7px",
        padding: "20px",
      },
      title: {
        fontSize: "18px",
        left: "0",
        transform: "translateX(0)",
      },
      metadata: {
        left: "0",
        transform: "translateX(0)",
      },
      date: {
        fontSize: "12px",
      },
      category: {
        fontSize: "9px",
      },
      tag: {
        fontSize: "9px",
      },
      close: {
        opacity: 0,
      },
    };
  }

  return {
    overlay: {
      opacity: 1,
    },
    floating: {
      top: "50px",
      left: "max(calc((100% - 800px) / 2), 50px)",
      bottom: "0px",
      right: "max(calc((100% - 800px) / 2), 50px)",
      borderRadius: "55px 55px 0 0",
      backgroundColor: "#f8f8f8",
      boxShadow: "0 0 10px #00000020",
    },
    header: {
      gap: "10px",
      padding: "60px 30px",
    },
    title: {
      fontSize: "24px",
      left: "50%",
      transform: "translateX(-50%)",
    },
    metadata: {
      left: "50%",
      transform: "translateX(-50%)",
    },
    date: {
      fontSize: "15px",
    },
    category: {
      fontSize: "12px",
    },
    tag: {
      fontSize: "12px",
    },
    close: {
      opacity: 1,
    },
  };
};
