import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div>
      {posts.map((post, key) => {
        const { title, postText, username } = post;
        return (
          <div
            className="post"
            key={key}
            onClick={() => {
              navigate(`/post/${post.id}`);
            }}
          >
            <h1 className="title">{title} </h1>
            <p className="post-content">{postText} </p>
            <span className="post-author">{username} </span>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
