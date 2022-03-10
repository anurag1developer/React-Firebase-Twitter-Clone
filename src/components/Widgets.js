import React from "react";

import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

import { Search } from "@mui/icons-material";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input placeholder="search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1501776776447598593"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="elonmusk"
          options={{ height: 400 }}
        />
        <TwitterTweetEmbed tweetId={"1501830449542299650"} />

        <TwitterShareButton
          url={"https://www.npmjs.com/package/react-twitter-embed"}
          options={{ text: "#reactjs is awesome", via: "AnuragBudakoti3" }}
        />
      </div>
    </div>
  );
};

export default Widgets;
