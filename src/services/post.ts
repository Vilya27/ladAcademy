import { api } from "@/api/api";
import { Post } from "@/components/PostsList/PostsList";

export const getPosts = (config) => {
  return api.get<Array<Post>>("/posts", { ...config });
};
export const getPost = (id: number) => {
  return api.get<Post>(`/posts/${id}`);
};
