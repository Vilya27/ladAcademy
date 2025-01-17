import { useEffect, useRef, useState } from "react";
import { getPosts, getPost } from "@/services/post";
import { Button } from "@mui/material";
export type Post = {
  userID: number;
  id: number;
  title: string;
  body: string;
};
const PostsList = () => {
  const [posts, setPosts] = useState<Array<Post>>([]);
  const [post, setPost] = useState<Post>();
  const controllerRef = useRef<AbortController>(null);
  useEffect(() => {
    // if (controllerRef.current === null) {
    controllerRef.current = new AbortController();
    // }

    const controller = new AbortController();
    const fetchPosts = async () => {
      try {
        const { data } = await getPosts({
          signal: controllerRef.current?.signal,
        });
        setPosts(data);
      } catch (e) {
        if (e instanceof Error) {
          console.log(e.message);
        }
      } finally {
        console.log("Запрос завершен");
      }
    };
    fetchPosts();
    return () => {
      controllerRef.current?.abort();
    };
  }, []);
  return (
    <div>
      <h1>PostsList</h1>
      {post?.title}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <Button onClick={() => controllerRef.current?.abort()}>
        Остановить запрос
      </Button>
    </div>
  );
};
export default PostsList;

// usereducer, usecontext, useeffect, usestate, useref, props
