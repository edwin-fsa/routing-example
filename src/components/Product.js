import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Product = () => {
  const [post, setPost] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const getProduct = async () =>
      fetch(`https://jsonplaceholder.typicode.com/posts/${productId}`)
        .then((r) => r.json())
        .then(setPost);
    getProduct();
  }, [productId]);

  return (
    <div>
      {post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
