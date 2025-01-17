import { useEffect, useRef, useState } from "react";
import { getPosts, getPost } from "@/services/post";
import { getUsers } from "@/services/users";
import { useQuery } from "@tanstack/react-query";
import { Button } from "../Button/Button";
export type Post = {
  userID: number;
  id: number;
  title: string;
  body: string;
};
const PostsList = () => {
  const {} = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
  const {
    data: posts,
    error,
    isLoading,
    isError,
    isStale,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    retry: 1,
    retryDelay: (failureCount) => {
      console.log(failureCount);
      return (1000 * 2) ^ failureCount;
    },
    staleTime: 10000,
    // refetchInterval: 3000,
    gcTime: 5000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled: false,
  });
  return (
    <div>
      <h1>PostsList</h1>
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Ошибка: {error.message}</h2>}
      {isFetching && <h2>Идет обновдение данных...</h2>}
      <ul>
        {posts &&
          posts.slice(0, 4).map((post) => <li key={post.id}>{post.title}</li>)}
      </ul>
      <Button onClick={() => refetch()}>Перезагрузить данные</Button>
    </div>
  );
};
export default PostsList;

// usereducer, usecontext, useeffect, usestate, useref, props
