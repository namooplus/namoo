export interface Post {
  id: number;
  title: string;
  date: string;
  content: string;
}

export type PostSummary = Omit<Post, "content">;
