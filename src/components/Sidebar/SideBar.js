import { Chat, EmojiFlags, ExpandMoreOutlined, LocalHospital, People, Storefront, VideoLibrary } from '@mui/icons-material'
import React from 'react'
import { useStateValue } from '../../StateProvider'
import SideBarRow from './Rows/SideBarRow'
import "./Sidebar.css"

const SideBar = () => {
  const [{user}, dispatch] = useStateValue()
  return (
    <div className="sidebar">
      <SideBarRow
        src={user.photoURL}
        title={user.displayName}
      />
      <SideBarRow Icon={LocalHospital} title="COVID-19 Information Center" />
      <SideBarRow Icon={EmojiFlags} title="Pages" />
      <SideBarRow Icon={People} title="Friends" />
      <SideBarRow Icon={Chat} title="Messenger" />
      <SideBarRow Icon={Storefront} title="Marketplace" />
      <SideBarRow Icon={VideoLibrary} title="Videos" />
      <SideBarRow Icon={ExpandMoreOutlined} title="More" />
    </div>
  );
}

export default SideBar
