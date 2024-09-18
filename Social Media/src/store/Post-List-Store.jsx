import { useState } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";

export const PostList = createContext({
  postList: [], //Api designing or contract designinig
  addPost: () => {},
  fetching: false,
  deletePost: () => {},
  initialPosts: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter((post) => {
      return post.id !== action.payload.postId;
    });
  } else if (action.type === "ADD_POST") {
    console.log(action.payload);
    newPostList = [action.payload.post, ...currentPostList];
    console.log(newPostList);
  } else if (action.type === "INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const [fetching, setFetching] = useState(false);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        post,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId: postId,
      },
    });
  };
  const initialPosts = (posts) => {
    dispatchPostList({
      type: "INITIAL_POSTS",
      payload: {
        posts: posts,
      },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList: postList,
        fetching: fetching,
        addPost: addPost,
        deletePost: deletePost,
        initialPosts: initialPosts,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
