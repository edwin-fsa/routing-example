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
    // we use productId inside of the api call, so it needs to be added
    // to the dependency array
  }, [productId]);

  return (
    <div>
      {/* ternary operators are like if statements, but they are expressions
          foo ? bar : baz
          is like
          if (foo) {
            bar
          } else {
            baz
          }
      */}
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
