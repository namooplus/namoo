import { CSSProperties } from "react";

export type Style = Record<string, CSSProperties>;

export interface Position {
  top: number;
  left: number;
  bottom: number;
  right: number;
}
