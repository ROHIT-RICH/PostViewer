import { useContext } from "react";
import { PostContext } from "../context/PostContext";

const Card = ({ post, index }) => {
  const { posts, setPosts, page } = useContext(PostContext);

  const handleRemove = () => {
    const start = page * 6;
    const current = posts.slice(start, start + 6);
    const removed = current.filter((_, i) => i !== index);
    const remaining = posts
      .slice(0, start)
      .concat(removed, posts.slice(start + 6));

    setPosts(remaining);
  };

  return (
    <div className="card">
      <button onClick={handleRemove}>❌</button>
      <h3>{post.title.slice(0, 30)}...</h3>
      <p>{post.body.slice(0, 60)}...</p>
      <time>Mon, 21 Dec 2020 14:57 GMT</time>
      <img
        src={`https://picsum.photos/300/200?random=${post.id}`}
        alt="random"
      />
    </div>
  );
};

export default Card;
