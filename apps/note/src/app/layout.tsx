import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PostList from "@/components/PostList";
import "./globals.css";
import styles from "./layout.module.css";
import Sidebar from "@/components/Sidebar";
import PostOverlay from "@/components/PostOverlay";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "나무의 노트",
  description: "나무의 노트",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.wrapper}>
          <Sidebar />
          <PostList />
        </div>
        <PostOverlay>{children}</PostOverlay>
      </body>
    </html>
  );
}
