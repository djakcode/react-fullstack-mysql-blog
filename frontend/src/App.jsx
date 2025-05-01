import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import Post from "./pages/Post.jsx";

function App() {
  return (
    <>
      <Router>
        <Link to={"/createpost"}>Create A Post</Link>
        <Link to={"/"}>Home Page</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
