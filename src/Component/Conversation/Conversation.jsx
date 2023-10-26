import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
function Conversation({ setOpenConversation, openConversation }) {
  const onClose = () => {
    setOpenConversation(false);
  };
  return (
    <div>
      <Drawer width={330} zIndex={50} style={{marginTop: 60}}
      title="Tin nhắn" placement="right" onClose={onClose} open={openConversation}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  )
}

export default Conversation