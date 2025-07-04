import { useContext } from "react";
import { PostContext } from "./context/PostContext";
import Pagination from "./components/Pagination";
import Card from "./components/Card";
import "./App.css";

const App = () => {
  const { posts, page, loading } = useContext(PostContext);

  const start = page * 6;
  const visiblePosts = posts.slice(start, start + 6);

  if (loading) return <h2 className="loading">Loading...</h2>;

  return (
    <>
      <div className="app">
        <h1>POST VIEWER</h1>
        <div className="card-grid">
          {visiblePosts.map((post, index) => (
            <Card key={post.id} post={post} index={index} />
          ))}
        </div>
        <Pagination />
      </div>
    </>
  );
};

export default App;

// const App = () =>{
//   return <div>hello</div>
// }

// export default App;
