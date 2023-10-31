import React, { useEffect, useRef, useState } from "react";
import Post from "./components/Post";
import "./styles.css";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("react");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    const source_url = `https://jsonplaceholder.typicode.com/posts`;
    setLoading(true);

    async function getPosts() {
      const response = await fetch(source_url);
      const data = await response.json();
      setPosts(data); // Fix this line
      setLoading(false);
    }

    setTimeout(() => {
      getPosts();
    }, 1000);
  }, [query]);

  function handleSearch() {
    setQuery(inputRef.current.value);
  }

  return (
    <div className="App">
      <input ref={inputRef} type="text" placeholder="search..." />

      <button onClick={handleSearch}>Search</button>
      <h1>Recent News</h1>

      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })
        )}
      </div>
    </div>
  );
}
