import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export const ProductListing = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () =>
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((r) => r.json())
        .then(setPosts);
    getPosts();
  // I don't need any dependencies in the array because I'm  not using any
  // other variables in my api calls
  }, []);
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={`/products/${post.id}`}>
          {post.title} - {post.description}
          </Link>
        </li>
      ))}
    </ul>
  );
};

