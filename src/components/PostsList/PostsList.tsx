import { useEffect, useState } from "react";

type Post = {
  userID: number;
  id: number;
  title: string;
  body: string;
};
const PostsList = () => {
  const [posts, setPosts] = useState<Array<Post>>([]);
  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {
            method: "get",
          }
        );
        const data = await response.json();
        setPosts(data);
      } catch (e) {
        if (e instanceof Error) {
          console.log(e.message);
        }
      } finally {
        console.log("Запрос завершен");
      }
    };
    getPosts();
  }, []);
  return (
    <div>
      <h1>PostsList</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default PostsList;
