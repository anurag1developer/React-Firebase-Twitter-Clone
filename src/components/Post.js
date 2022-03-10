import React, { forwardRef } from "react";

import "./Post.css";
import { Avatar } from "@mui/material";
import {
  Verified,
  ChatBubbleOutline,
  Repeat,
  FavoriteBorder,
  Publish,
} from "@mui/icons-material";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    // const { displayName, username, verified, text, image, avatar } = props;
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}
                <span className="post__headerSpecial">
                  {verified && <Verified className="post__badge" />} @{username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          {image === "" ? (
            ""
          ) : (
            <img className="post__image" src={image} alt="tweets post" />
          )}

          <div className="post__footer">
            <ChatBubbleOutline fontSize="small" />
            <Repeat fontSize="small" />
            <FavoriteBorder fontSize="small" />
            <Publish fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
