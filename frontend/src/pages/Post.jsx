import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Post = () => {
  let { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/${id}`).then((response) => {
      setPost(response.data);
    });
  }, []);

  return (
    <div className="post-page">
      <div className="left-side">
        <h1 className="title">{post.title}</h1>
        <p className="post-text">{post.postText}</p>
        <span className="footer">{post.username}</span>
      </div>
      <div className="right-side"></div>
    </div>
  );
};

export default Post;
