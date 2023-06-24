import React, { useContext } from "react";
import "./singlePost.css";
import { useNavigate, useParams } from "react-router-dom";
import { ForumContext } from "../../contexts/forumContext";
import LeftSideBar from "../../components/LeftSidebar/leftSidebar";
import "../Home/home.css";
import "./singlePost.css";
import { getPostDate } from "../../utils/getPostData";

const SinglePost = () => {
  const { postID } = useParams();

  const navigate = useNavigate();

  const { posts, setPosts } = useContext(ForumContext);

  const postDetails = posts.find((post) => post.postId === postID);

  const handleUpvote = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.postId === postId) {
          return {
            ...post,
            upvotes: post.upvotes + 1,
          };
        }
        return post;
      })
    );
  };

  const handleDownvote = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.postId === postId) {
          return {
            ...post,
            downvotes: post.downvotes + 1,
          };
        }
        return post;
      })
    );
  };

  const handleBookmark = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.postId === postId) {
          return {
            ...post,
            isBookmarked: !post.isBookmarked,
          };
        }
        return post;
      })
    );
  };

  const {
    postId,
    username,
    picUrl,
    post,
    postDescription,
    upvotes,
    downvotes,
    tags,
    createdAt,
    comments,
    isBookmarked,
  } = postDetails;

  console.log(postDetails);

  return (
    <div className="home">
      <div className="home-header">
        <h2>MyForum</h2>
      </div>
      <LeftSideBar />
      <div className="home-main">
        <div className="posts-section">
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              paddingBottom: "10px",
            }}
          >
            <i class="fa-solid fa-arrow-left" onClick={() => navigate("/")}></i>
            <h2>Post</h2>
          </div>
          <div className="post-card" key={postId}>
            <div className="post-votes-section">
              <i
                class="fa-solid fa-caret-up"
                onClick={() => handleUpvote(postId)}
              ></i>
              <div>{upvotes - downvotes}</div>
              <i
                class="fa-solid fa-caret-down"
                onClick={() => handleDownvote(postId)}
              ></i>
            </div>
            <div className="post-details-section">
              <div className="post-created-detail">
                <img src={picUrl} alt={username} width="50" height="50" />
                <p>Posted by @{username}</p>
                <div>·{getPostDate(createdAt)}</div>
              </div>
              <div className="post-heading">{post}</div>
              <div className="post-tags">
                {tags.map((tag) => (
                  <div className="tag">{tag.toUpperCase()}</div>
                ))}
              </div>
              <div className="post-description">{postDescription}</div>
              <div className="post-icons">
                <i
                  class="fa-regular fa-comment"
                  onClick={() => navigate(`/post/${postId}`)}
                ></i>
                <i class="fa-solid fa-share-nodes"></i>
                <i
                  className={
                    isBookmarked
                      ? "fa-solid fa-bookmark"
                      : "fa-regular fa-bookmark"
                  }
                  onClick={() => handleBookmark(postId)}
                ></i>
              </div>
            </div>
          </div>
          <div className="post-comments">
            {comments.length === 0 ? (
              <p>No comments</p>
            ) : (
              comments?.map((com) => {
                const {
                  commentId,
                  username,
                  picUrl,
                  comment,
                  createdAt,
                } = com;
                return (
                  <div className="comments-section" key={commentId}>
                    <div>
                      <img src={picUrl} alt={username} width="20" height="20" />
                    </div>
                    <div className="comments-details">
                      <div>
                        @{username} .{getPostDate(createdAt)}
                      </div>
                      <div>{comment}</div>
                      <div>
                        <div className="post-icons">
                          <i class="fa-regular fa-heart"></i>
                          <i class="fa-regular fa-comment"></i>
                          <i class="fa-solid fa-share-nodes"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
