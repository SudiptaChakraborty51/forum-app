import React, { createContext, useState } from "react";
import { forumData } from "../data";

export const ForumContext = createContext();

const ForumProvider = ({ children }) => {

    const [posts, setPosts] = useState(forumData.posts);
  return <ForumContext.Provider value={{posts, setPosts}}>{children}</ForumContext.Provider>;
};

export default ForumProvider;
