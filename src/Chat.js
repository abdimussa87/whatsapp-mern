import { Avatar, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';
import './Chat.css';
import ChatMessage from './ChatMessage';
import axios from './axios';
function Chat({ messages }) {
    const [message, setMessage] = useState('');
    const chatMessageComponents = messages.map(message => <ChatMessage key={message.id} name={message.name} message={message.message} received={message.received} timestamp={message.timestamp} />);
    const onMessageSent = async (e) => {
        e.preventDefault();
      await  axios.post('/api/v1/messages',{
            message:message,
            name:'Abdi',
            timestamp: new Date().toUTCString(),
            received:false
        });
        setMessage('');
    }
    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen Friday...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </div>

            </div>
            <div className="chat__body">

                {chatMessageComponents}

            </div>
            <div className="chat__footer">
                <InsertEmoticonOutlinedIcon />
                <form>
                    <input
                        placeholder='Type a message' type="text"
                         value={message} 
                        onChange={e => setMessage(e.target.value)  } />
                    <button type='submit' onClick={onMessageSent}>Send a message</button>
                </form>
                < MicOutlinedIcon />

            </div>
        </div>
    )
}

export default Chat
