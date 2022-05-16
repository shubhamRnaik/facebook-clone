import React from 'react'
import "./css/post.css"
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Avatar } from '@material-ui/core';
import PublicIcon from '@material-ui/icons/Public';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
function Post({photoURL, image, username, timestamp, message}) {
    return (
        <div className="post">
            <div className="post__top">
                <div className="post__topLeft">
                    <Avatar src={photoURL}/>
                    <div className="postInfo">
                        <h4>{username}</h4>
                        <p>{timestamp} <PublicIcon/></p>
                    </div>
                </div>
                <MoreHorizIcon/>
                
            </div>

            <div className="post__middle">
                <p>
                   {message}
                </p>
                { image && <img src={image}/> }
                
            </div>

            <div className="post__bottom">
                <div className="post__bottomOptions">
                    <ThumbUpIcon/> <p>Like</p>
                </div>

                <div className="post__bottomOptions">
                    <ChatBubbleOutlineIcon/> <p>Comment</p>
                </div>

                <div className="post__bottomOptions">
                    <ShareIcon/> <p>Share</p>
                </div>
            </div>
        </div>
    )
}

export default Post
