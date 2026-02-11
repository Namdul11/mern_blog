import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import axios from "axios";
import { Link } from "react-router-dom";
import renderHTML from "react-render-html";
import { getUser, getToken } from "./helpers";
import Footer from "./Footer";
import "./css/Blog.css";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = () => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_API}/posts`)
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(() => alert("Error in fetching posts"));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const deleteConfirm = (slug) => {
    if (window.confirm("Press OK if you want to delete this post?")) {
      deletePost(slug);
    }
  };

  const deletePost = (slug) => {
    axios
      .delete(`${process.env.REACT_APP_API}/post/${slug}`, {
        headers: {
          authorization: `Bearer ${getToken()}`,
        },
      })
      .then((response) => {
        alert(response.data.message);
        fetchPosts();
      })
      .catch(() => alert("Error deleting post"));
  };

  const Body = () => (
    <div className="text-center my-5">
      <h1
        className="fw-bold mb-4"
        style={{
          color: "#6d4c41",
          fontFamily: "'Noto Serif', 'Merriweather', serif",
          letterSpacing: "1px",
        }}
      >
        Dudjom Tersar Blogs
      </h1>
      <p
        className="lead mx-auto mb-5"
        style={{
          maxWidth: "650px",
          color: "#795548",
          fontFamily: "'Noto Serif', 'Merriweather', serif",
          lineHeight: "1.8",
        }}
      >
        Discover reflections, teachings, and writings from our community and
        lineage holders. May these words inspire clarity and compassion.
      </p>

      {loading && <div className="fs-xl-1">Loading...</div>}

      <div className="row justify-content-center">
        {posts.map((post) => (
          <div
            key={post._id}
            className="col-md-8 mb-4"
          >
            <div
              className="card border-0 shadow-sm text-start h-100"
              style={{
                backgroundColor: "#fffde7",
                borderRadius: "10px",
                fontFamily: "'Noto Serif', 'Merriweather', serif",
              }}
            >
              <div className="card-body">
                <Link
                  to={`/post/${post.slug}`}
                  className="text-decoration-none"
                >
                  <h3
                    className="fw-bold mb-3"
                    style={{
                      color: "#6d4c41",
                      letterSpacing: "0.5px",
                      lineHeight: "1.6",
                    }}
                  >
                    {post.title}
                  </h3>
                </Link>

                <div
                  className="text-left lead mb-3"
                  style={{
                    color: "#5d4037",
                    fontSize: "1rem",
                    lineHeight: "1.7",
                  }}
                >
                  {renderHTML(post.content.substring(0, 400))}...
                </div>

                <div
                  className="small text-muted mb-3"
                  style={{
                    fontStyle: "italic",
                    color: "#8d6e63",
                  }}
                >
                  Posted by <span className="fw-semibold">{post.user}</span> on{" "}
                  {new Date(post.createdAt).toLocaleDateString()}
                </div>

                {getUser() && (
                  <div>
                    <Link
                      to={`/post/update/${post.slug}`}
                      className="btn btn-sm btn-outline-warning me-2"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => deleteConfirm(post.slug)}
                      className="btn btn-sm btn-outline-danger"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {!loading && posts.length === 0 && (
          <div className="text-muted mt-4">
            <em>No blog posts found yet.</em>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div
      className="container min-vh-100 d-flex flex-column"
      style={{
        background: "linear-gradient(160deg, #fff8e1, #fbe9e7)",
        color: "#5d4037",
        fontFamily: "'Noto Serif', 'Merriweather', serif",
      }}
    >
      <Nav />
      <div className="container my-auto py-5">
        <Body />
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
