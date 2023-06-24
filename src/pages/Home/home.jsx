import React, { useContext } from "react";
import "./home.css";
import LeftSideBar from "../../components/LeftSidebar/leftSidebar";
import { useState } from "react";
import { sortOptions, getSortedPosts } from "../../utils/sortPosts";
import { useNavigate } from "react-router-dom";
import { ForumContext } from "../../contexts/forumContext";
import { getPostDate } from "../../utils/getPostData";

const Home = () => {
  const {posts, setPosts} = useContext(ForumContext);

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

  const [sortByOption, setSortByOption] = useState("Latest");

  const sortedPosts = getSortedPosts(posts, sortByOption);

  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-header">
        <h2>MyForum</h2>
      </div>
      <LeftSideBar />
      <div className="home-main">
      <h2>{sortOptions[sortByOption]}</h2>
        <ul>
          {sortedPosts?.map(
            ({
              postId,
              username,
              picUrl,
              post,
              postDescription,
              upvotes,
              downvotes,
              tags,
              createdAt,
              isBookmarked
            }) => (
              <div className="post-card" key={postId}>
              <div className="post-votes-section">
                <i class="fa-solid fa-caret-up" onClick={() => handleUpvote(postId)}></i>
                <div>{upvotes - downvotes}</div>
                <i class="fa-solid fa-caret-down" onClick={() => handleDownvote(postId)}></i>
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
                    className={isBookmarked ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark"}
                    onClick={() => handleBookmark(postId)}
                  ></i>
                </div>
              </div>
            </div>
            )
          )}
        </ul>
        <div className="right-sidebar">
          <div className="sort-post">
            <h3>{sortOptions[sortByOption]}</h3>
            <select onChange={(e) => setSortByOption(e.target.value)}>
              {Object.keys(sortOptions).map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
