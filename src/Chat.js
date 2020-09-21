import { Avatar ,IconButton} from '@material-ui/core';
import React from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import './Chat.css';
function Chat() {
    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h2>Room Name</h2>
                    <p>Last seen Friday...</p>
                    <div className="chat__headerInfoRight">
                        <IconButton>
                        <SearchIcon/>
                        </IconButton>
                        <IconButton>
                        <AttachFileOutlinedIcon/>
                        </IconButton>
                        <IconButton>
                        <MoreVertIcon/>
                        </IconButton>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat
