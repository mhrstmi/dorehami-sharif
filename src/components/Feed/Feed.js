import React, { useState, useEffect } from "react";
import TweetBox from "../TweetBox/TweetBox";
import Post from "../Post/Post";
import "./Feed.css";
import FlipMove from "react-flip-move";
import MobileNav from "../MobileNav/MobileNav";
import {Link} from "react-router-dom";


function Feed() {
  const [posts, setPosts] = useState([]);
  
  

  return (
    <div className="feed">

      <MobileNav />
      
      <div className="feed__header">
        <h2>خانه</h2>
      </div>

      

      <TweetBox />

      <FlipMove>
        
          <Post
            key="fgdfgdfgdfg"
            displayName="tttttttttttttttt"
            username="uuuuuuu"
            verified={true}
            text="dfkgjkdfgkljdfjg dlkj glkj j ldjlj dj lkj lkj ldkj lkj lkj lkj kjk ljkl jlk jkl jlk j"
            avatar="dfgdfg"
            image="gfdfgfg"
          />

<Post
            key="fgdfgdfgdfg"
            displayName="tttttttttttttttt"
            username="uuuuuuu"
            verified={true}
            text="dfkgjkdfgkljdfjg dlkj glkj j ldjlj dj lkj lkj ldkj lkj lkj lkj kjk ljkl jlk jkl jlk j"
            avatar="dfgdfg"
            image="gfdfgfg"
          />

<Post
            key="fgdfgdfgdfg"
            displayName="tttttttttttttttt"
            username="uuuuuuu"
            verified={true}
            text="dfkgjkdfgkljdfjg dlkj glkj j ldjlj dj lkj lkj ldkj lkj lkj lkj kjk ljkl jlk jkl jlk j"
            avatar="dfgdfg"
            image="gfdfgfg"
          />

<Post
            key="fgdfgdfgdfg"
            displayName="tttttttttttttttt"
            username="uuuuuuu"
            verified={true}
            text="dfkgjkdfgkljdfjg dlkj glkj j ldjlj dj lkj lkj ldkj lkj lkj lkj kjk ljkl jlk jkl jlk j"
            avatar="dfgdfg"
            image="gfdfgfg"
          />
       
      </FlipMove>
    </div>
  );
}

export default Feed;
