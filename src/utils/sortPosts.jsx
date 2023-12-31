export const sortOptions = {
    Latest: "Latest Posts",
    Oldest: "Oldest Posts",
    Trending: "Trending Posts",
  };
  
  export const getSortedPosts = (posts, sortBy) => {
    switch (sortBy.toUpperCase()) {
      case "LATEST":
        return [...posts].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      case "OLDEST":
        return [...posts].sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
      case "MOST UPVOTED":
        return [...posts].sort((a, b) => b.upvotes - a.upvotes);
      default:
        return [...posts];
    }
  };