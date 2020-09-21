import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';
import './Chat.css';
import ChatMessage from './ChatMessage';
function Chat() {
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

                <ChatMessage/>
                <ChatMessage/>
                <ChatMessage/>
                
            </div>
            <div className="chat__footer">
                <InsertEmoticonOutlinedIcon/>
                <form>
                <input placeholder='Type a message' type="text"/>
                <button type='submit'>Send a message</button>
                </form>
               < MicOutlinedIcon/>

            </div>
        </div>
    )
}

export default Chat
