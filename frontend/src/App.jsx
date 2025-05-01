import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);
  return (
    <>
      {posts.map((post, key) => {
        const { title, postText, username } = post;
        return (
          <div className="post" key={key}>
            <h1 className="title">{title} </h1>
            <p className="post-content">{postText} </p>
            <span className="post-author">{username} </span>
          </div>
        );
      })}{" "}
    </>
  );
}

export default App;
