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
      },
    };
  }

  return {
    overlay: {
      opacity: 1,
    },
    floating: {
      top: "50px",
      left: "50px",
      bottom: "0px",
      right: "50px",
      borderRadius: "30px 30px 0 0",
      backgroundColor: "#f8f8f8",
      boxShadow: "0 0 10px #00000020",
    },
    header: {
      gap: "10px",
      padding: "30px",
    },
    title: {
      fontSize: "24px",
    },
  };
};
