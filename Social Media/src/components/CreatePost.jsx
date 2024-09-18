import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList as PostListValue } from "../store/Post-List-Store";

const CreatePost = ({ element }) => {
  const obj = useContext(PostListValue);
  const deletePost = obj.deletePost;
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => {
                return deletePost(element.id);
              }}
            >
              <MdDelete />
            </span>
            {element.title}
          </h5>
          <p className="card-text">{element.body}</p>
          {Array.isArray(element.tags) &&
            element.tags.map((Data) => {
              return (
                <span key={Data} className="badge text-bg-primary">
                  {Data}
                </span>
              );
            })}
          <div className="alert alert-success" role="alert">
            Likes:{element.reactions.likes} Dislikes:
            {element.reactions.dislikes}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
