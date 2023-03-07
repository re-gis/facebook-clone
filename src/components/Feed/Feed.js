import React, { useEffect, useState } from "react";
import db from "../../firebase";
import "./Feed.css";
import MessageSender from "./Messenger/MessageSender";
import Posts from "./Posts/Posts";
import StoryReel from "./Story/StoryReel";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamps", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Posts
          key={post.data.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamps={post.data.timestamps}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  );
};

export default Feed;
