import { useContext } from "react";
import { PostContext } from "../context/PostContext";

const Pagination = () => {
  const { posts, page, setPage } = useContext(PostContext);
  const totalPages = Math.ceil(posts.length / 6);

  const goToPage = (p) => {
    if (p >= 0 && p < totalPages) setPage(p);
  };

  const pageNumbersToShow = () => {
    if (totalPages <= 3) return [...Array(totalPages).keys()];
    if (page === 0) return [0, 1, 2];
    if (page === totalPages - 1) return [totalPages - 3, totalPages - 2, totalPages - 1];
    return [page - 1, page, page + 1];
  };

  return (
    <div className="pagination">
      <button onClick={() => goToPage(page - 1)} disabled={page === 0}>
        ‹‹
      </button>

      {pageNumbersToShow().map((p) => (
        <button
          key={p}
          onClick={() => goToPage(p)}
          className={page === p ? "active" : ""}
        >
          {p + 1}
        </button>
      ))}

      <button onClick={() => goToPage(page + 1)} disabled={page === totalPages - 1}>
         ››
      </button>
    </div>
  );
};

export default Pagination;
