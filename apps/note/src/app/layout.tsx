import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PostList from "@/components/PostList";
import Sidebar from "@/components/Sidebar";
import PostModal from "@/components/PostModal";
import "./globals.css";
import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "나무의 노트",
  description: "나무의 노트",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.wrapper}>
          <Sidebar />
          <PostList />
        </div>
        <PostModal>{children}</PostModal>
      </body>
    </html>
  );
};

export default RootLayout;
