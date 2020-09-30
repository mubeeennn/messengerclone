import React from 'react';
import {useState} from 'react';
import './App.css';

function App() {
  const [input, setInput]= useState("");
  const [messages, setMessages]= useState(['hello','hi']);
  
  const sendMessages=(event) =>{
    event.preventDefault();
      setMessages([...messages, input]);
      setInput('');
  }
  
  return (
    <div className="App">
       <h1>Messenger app clone</h1>
      <form>
        
      <input value={input} onChange={(Event) =>setInput(Event.target.value)}/>
      <button type="submit" onClick={sendMessages}>Send</button>
      </form>
      
 
      {messages.map(messege=>(
        <p>{messege}</p>
      ))
      }
    </div>
  );
}

export default App;
