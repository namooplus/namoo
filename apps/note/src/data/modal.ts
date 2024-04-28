import { Position, Style } from "@/interfaces/style";

export const createPostModalOriginStyle = (
  originPosition: Position
): Style => ({
  overlay: {
    opacity: 0,
  },
  floating: {
    top: `${originPosition.top}px`,
    left: `${originPosition.left}px`,
    bottom: `${originPosition.bottom}px`,
    right: `${originPosition.right}px`,
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
    fontSize: "12px",
  },
  tag: {
    fontSize: "9px",
  },
  close: {
    opacity: 0,
  },
});

export const postModalStyle = {
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
    fontSize: "15px",
  },
  tag: {
    fontSize: "12px",
  },
  close: {
    opacity: 1,
  },
};
