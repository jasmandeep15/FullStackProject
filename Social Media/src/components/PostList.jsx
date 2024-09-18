import { useContext, useEffect, useState } from "react";
import CreatePost from "./CreatePost";
import { PostList as PostListValue } from "../store/Post-List-Store";
import Welcome from "./Welcome";
import Loading from "./Loading";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const List = useLoaderData();
  return (
    <>
      {List.length === 0 && <Welcome></Welcome>}
      {List.map((element) => {
        return (
          <CreatePost
            className="createPost"
            key={element.id}
            element={element}
          ></CreatePost>
        );
      })}
    </>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};
export default PostList;
