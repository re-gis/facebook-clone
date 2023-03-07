import React from 'react'
import './Widgets.css'

const Widgets = () => {
  return (
    <div className="widgets">
      <iframe
        src="https://www.facebook.com/CleverProgrammerr"
        frameborder="0"
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}

export default Widgets
