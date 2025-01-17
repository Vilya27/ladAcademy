import { api } from "@/api/api";
import { Post } from "@/components/PostsList/PostsList";

export const getPosts = async () => {
  const { data } = await api.get<Array<Post>>("/posts");
  return data;
};
export const getUserPosts = async (id: string) => {
  const { data } = await api.get<Array<Post>>(`/users/${id}/posts`);
  return data;
};
export const getPost = (id: number) => {
  return api.get<Post>(`/posts/${id}`);
};
