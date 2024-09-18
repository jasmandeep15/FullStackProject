import { useContext, useRef } from "react";
import { PostList } from "../store/Post-List-Store";
import { Form, redirect, useNavigate } from "react-router-dom";

const Post = () => {
  return (
    <>
      <Form method="POST">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="Title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail2" className="form-label">
            Post Content
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail2"
            aria-describedby="emailHelp"
            name="Content"
            placeholder="How are you feeling today"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail3" className="form-label">
            HashTags
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail3"
            aria-describedby="emailHelp"
            name="HashTag"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </Form>
    </>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.HashTag = postData.HashTag.split(" ");
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });

  return redirect("/");
}

export default Post;
