import data from "../data/blog";
import "./Blog.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const Blog = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    const result = data.filter((item) =>
      item.title.toLowerCase().includes(search)
    );
    // console.log(result);
    setFilter(result);
  }, [search]);
  return (
    <div className="blog-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </div>
      <article>
        {filter.map((item) => (
          <Link to={`/blog/${item.id}`} key={item.id}>
            <div className="card">
              <h2>{item.title}</h2>
              <p>{item.content.substring(0, 500)}</p>
              <hr />
            </div>
          </Link>
        ))}
      </article>
    </div>
  );
};

export default Blog;
