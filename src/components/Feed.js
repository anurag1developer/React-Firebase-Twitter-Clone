import React, { useState, useEffect } from "react";

import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

// Using Firebase for Database
import db from "../firebase";
import { getDocs } from "firebase/firestore";

// React flip move
import FlipMove from "react-flip-move";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // get collection data
    const firebasePosts = [];
    getDocs(db)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          firebasePosts.push(doc.data());
        });
        // console.log(firebasePosts);
        setPosts(firebasePosts);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h1>Home</h1>
      </div>

      <TweetBox posts={posts} />

      <FlipMove>
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              displayName={post.displayName}
              username={post.username}
              verified={post.verified}
              text={post.text}
              avatar={post.avatar}
              image={post.image}
            />
          );
        })}
      </FlipMove>
    </div>
  );
};

export default Feed;
