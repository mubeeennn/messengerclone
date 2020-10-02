import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import {Button, FormControl, InputLabel, Input, IconButton} from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
function App() {
  const [input, setInput]= useState("");
  const [messages, setMessages]= useState([]);

  const [username, setUsername]= useState("");

  useEffect(() => {
     db.collection('message')
     .orderBy('timestamp','desc')
     .onSnapshot(snapshot=>{
       setMessages(snapshot.docs.map(doc=> {return {id:doc.id, message:doc.data()}}))
     })
     
  }, [])

  useEffect(() => {
    setUsername(prompt("Please enter your name"))
  }, [])


  const sendMessages=(event) =>{
    event.preventDefault();
     // setMessages([...messages, {username: username, message: input}]);
      db.collection("message").add({
        username: username,
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }
        
      )
      setInput('');
  }
  
  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2019/10/Messenger_Logo_Color_RGB.png?w=100&h=100"/>
       <h1>Facebook Messenger clone</h1>
       <h2>Welcome {username}</h2>
      <form className="app__form"> 
        <FormControl className="app__formcontrol">
          <Input className="form__input" placeholder="Enter a message..." value={input} onChange={(Event) =>setInput(Event.target.value)}/>
          <IconButton className="form__iconbtn" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessages}>
          <SendIcon/>
          </IconButton>
          {/* <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessages}><SendIcon/></Button> */}
        </FormControl>
        
      </form>
      <FlipMove>
        {messages.map(({id,message})=>(
          <Message key={id} username={username} message={message}/>
        ))
        }
      </FlipMove>
      
    </div>
  );
}

export default App;
