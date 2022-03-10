import React, { useEffect, useState } from "react";

import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";

// Using Firebase
import db from "../firebase";
import { setDoc, doc, getDoc } from "firebase/firestore";

const TweetBox = ({ posts }) => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const [count, setCount] = useState(posts.length);

  const sendTweet = (e) => {
    e.preventDefault();

    const setDataToFirebase = async () => {
      setCount((prevCount) => prevCount + 1);
      await setDoc(doc(db), {
        displayName: "Sandeep Maheshwari",
        username: "aasaanhai",
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar:
          "https://yt3.ggpht.com/UjKc54x7sVzQ4KLlS5rgMI0DdLoaa4cFbFpsFsxLxcSXEbTWotIPvyCA63BjTddipDv8LQufiQ=s900-c-k-c0x00ffffff-no-rj",
        id: count,
      });
    };

    setDataToFirebase();

    // db.collection("posts").add({
    //   displayName: "Sandeep Maheshwari",
    //   username: "aasaanhai",
    //   verified: true,
    //   text: tweetMessage,
    //   image: tweetImage,
    //   avatar:
    //     "https://yt3.ggpht.com/UjKc54x7sVzQ4KLlS5rgMI0DdLoaa4cFbFpsFsxLxcSXEbTWotIPvyCA63BjTddipDv8LQufiQ=s900-c-k-c0x00ffffff-no-rj",
    //   id: Math.random(),
    // });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://yt3.ggpht.com/UjKc54x7sVzQ4KLlS5rgMI0DdLoaa4cFbFpsFsxLxcSXEbTWotIPvyCA63BjTddipDv8LQufiQ=s900-c-k-c0x00ffffff-no-rj" />
          {/* <Avatar src="https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg" /> */}
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Enter image URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
