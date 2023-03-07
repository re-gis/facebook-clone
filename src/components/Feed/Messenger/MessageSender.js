import {
  InsertEmoticon,
  PhotoLibrarySharp,
  VideoCameraBack,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { useState } from "react";
import db from "../../../firebase";
import { useStateValue } from "../../../StateProvider";
import "./MessageSender.css";
import firebase from "firebase/compat/app";

const MessageSender = () => {
  const [{user}, dispatch] = useStateValue()
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      message: input,
      timestamps: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    })

    setInput('')
    setImageUrl('')
  };

  return (
    <div className="messageSender">
      <div className="messageSender_top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            className="messageSender_input"
            placeholder={`What's on your mind ${user.displayName}?`}
            onChange={(e) => setInput(e.target.value)}
          />

          <input
            // className='messageSender_input'
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Image URL (Optional)"
          />

          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>

      <div className="messageSender_bottom">
        <div className="messageSender_option">
          <VideoCameraBack style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>

        <div className="messageSender_option">
          <PhotoLibrarySharp style={{ color: "green" }} />
          <h3>Live Video</h3>
        </div>

        <div className="messageSender_option">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Live Video</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
