import React from "react";
import "./Header.css";
import { Home, Search, Flag, StorefrontOutlined, SupervisedUserCircleOutlined, SubscriptionsOutlined } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { IconButton } from "@mui/material";
import { Forum } from "@mui/icons-material";
import { NotificationsActive } from "@mui/icons-material";
import { ExpandMore } from "@mui/icons-material";
import { Add } from "@mui/icons-material";
import { useStateValue } from "../../StateProvider";

const Header = () => {
  const [{ user }, dispatch] = useStateValue()
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1024px-2021_Facebook_icon.svg.png"
          alt=""
        />
        <div className="header_input">
            <Search />
            <input placeholder="Search Facebook" type="text" />
        </div>
      </div>

      <div className="header_middle">
        <div className="header_option header_option_active">
            <Home fontSize="large" />
        </div>

        <div className="header_option">
            <Flag fontSize="large" />
        </div>
        
        <div className="header_option">
            <SubscriptionsOutlined fontSize="large" />
        </div>

        <div className="header_option">
            <StorefrontOutlined fontSize="large" />
        </div>

        <div className="header_option">
            <SupervisedUserCircleOutlined fontSize="large" />
        </div>
      </div>

      <div className="header_right">
        <div className="header_info">
            <Avatar src={user.photoURL} />
            <h4>{user.displayName}</h4>
        </div>
        <IconButton>
            <Add />
        </IconButton>
        <IconButton>
            <Forum />
        </IconButton>
        <IconButton>
            <NotificationsActive />
        </IconButton>
        <IconButton>
            <ExpandMore />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
