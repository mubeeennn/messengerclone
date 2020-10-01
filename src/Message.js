import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import './Message.css';
const Message=React.memo(({username, message})=> {
    const isUser = username=== message.username;
    return (
        <div className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser? "message__usercard":"message__guestcard"}>
                <CardContent>
                    <Typography color="white" variant="h5" component="h2">
                        {console.log(username)}
                        {message.username}:{message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
})

export default Message;
