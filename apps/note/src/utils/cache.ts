import { Position } from "@/interfaces/layout";
import { PostSummary } from "@/interfaces/post";

/**
 * Post Selection
 */

export type PostSelection = PostSummary & {
  entryPosition: Position;
};

export const PostSelectionCache = (() => {
  let cache: PostSelection | undefined = undefined;

  const memorize = (selection: PostSelection) => (cache = selection);
  const clear = () => (cache = undefined);
  const get = () => cache;

  return { memorize, clear, get };
})();
