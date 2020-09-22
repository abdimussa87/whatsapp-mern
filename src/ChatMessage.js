import React from 'react'
import './ChatMessage.css'
function ChatMessage({key,name,received,timestamp,message}) {
    return (
        <div className='message'>
            <p  className={`chat__message ${!received && "chat__reciever"}  `}>
                    <span className='chat__name'>{name}</span>
                     {message}
                    <span className='chat__timestamp'>
                        {timestamp}
                    </span>

                </p>
               
        </div>
    )
}

export default ChatMessage
