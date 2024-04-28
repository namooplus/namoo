export interface Post {
  id: number;

  /** Metadata */
  title: string;
  date: string;
  category: string;
  tags: string[];

  /** Content */
  content: string;
}

export type PostSummary = Omit<Post, "content">;
