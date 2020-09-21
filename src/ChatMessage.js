import React from 'react'
import './ChatMessage.css'
function Message() {
    return (
        <div className='message'>
            <p className='chat__message chat__reciever'>
                    <span className='chat__name'>Abdi</span>
                    This is a message 
                    <span className='chat__timestamp'>
                        {new Date().toUTCString()}
                    </span>

                </p>
               
        </div>
    )
}

export default Message
