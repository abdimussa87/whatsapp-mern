import React, { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js';
import axios from './axios';
function App() {

  const [messages,setMessages]= useState([]);

  useEffect(() => {
    axios.get('/api/v1/messages').then(response=>{
      setMessages(response.data);
    })
    
  }, [])

  useEffect(() => {
    const pusher = new Pusher('5b2b23b070095a894ac5', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      // alert(JSON.stringify(data));
      setMessages([...messages,data]);
    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }

  }, [messages]);
  console.log(messages);
  return (
    <div className="app">
      <div className="app_body">
      <Sidebar/>
      <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
