import { useEffect, useState } from "react";

export default function Post({ post }) {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const author_url = `https://jsonplaceholder.typicode.com/users/${post.userId}`;

    async function getAuthor() {
      const response = await fetch(author_url);
      const data = await response.json();
      setAuthor(data);
    }

    getAuthor();
  }, [post.userId]);

  return (
    <div className="article">
      <h2>
        {post.title}
        {/* <br />
        {article._tags.map((tag) => (
          <span>{tag}</span>
        ))} */}
      </h2>
      <span>By: {post.name}</span>
      {author && (
        <p>
          <span>{post.body}</span>
          {/* <span>Karma: {author.karma}</span> */}
        </p>
      )}
    </div>
  );
}
