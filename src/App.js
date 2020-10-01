import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import {Button, FormControl, InputLabel, Input} from '@material-ui/core';
import Message from './Message';

function App() {
  const [input, setInput]= useState("");
  const [messages, setMessages]= useState([
    {username: "Mubeen", text: "Hello"},
    {username:"Midha", text:"Hi"}
  ]);
  const [username, setUsername]= useState("");
  useEffect(() => {
    setUsername(prompt("Please enter your name"))
  }, [])


  const sendMessages=(event) =>{
    event.preventDefault();
      setMessages([...messages, {username: username, text: input}]);
      setInput('');
  }
  
  return (
    <div className="App">
       <h1>Messenger app clone</h1>
       <h2>Welcome {username}</h2>
      <form> 
        <FormControl>

          <InputLabel >Enter message here</InputLabel>
          <Input value={input} onChange={(Event) =>setInput(Event.target.value)}/>
          <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessages}>Send</Button>
        </FormControl>
        
      </form>

      {messages.map(messege=>(
        <Message username={messege.username} text={messege.text}/>

      ))
      }
    </div>
  );
}

export default App;
