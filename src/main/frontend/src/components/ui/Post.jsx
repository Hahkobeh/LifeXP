import React, {useRef, useEffect, useState} from 'react';

import {GoComment} from 'react-icons/go';
import {BiCommentAdd} from 'react-icons/bi';
import {BsThreeDotsVertical} from 'react-icons/bs';
import Options from './Options';
import './Post.scss';
import axios from 'axios';

function Post(props){

    
    
    const currentName = localStorage.getItem('username');

    const [postOpen, setPostOpen] = useState(false);
    const [openTextBox, setOpenTextBox] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);
    const [commentSelectable, setCommentSelectable] = useState(false);
    const [replies, setReplies] = useState([]);

    const replyRef = useRef();

    async function openPost(){
        
        await axios.get(`http://localhost:8080/api/discussion/get-comments/${props.id}`)
            .then( res =>{
                setReplies(res.data);
            });
        setPostOpen(true);
    }

    function closePost(){
        setPostOpen(false);
        setOpenTextBox(false);
    }

    function openPostTextBox(){
        setPostOpen(true);
        setOpenTextBox(true);
    }

    async function replyHandler(){

        if(replyRef.current.value === ''){
            return
        }
        
        let data = {
            postId: props.id,
            username: currentName,
            reply: replyRef.current.value 

        }
        await axios.post(`http://localhost:8080/api/discussion/create-comment`, data)
        openPost();
        setOpenTextBox(false);
    }

    function postOptions(){
        setOpenOptions(!openOptions);
        setCommentSelectable(false);
    }

    async function delFriend(){
        await axios.delete(`http://localhost:8080/api/user/delete-friend/${currentName}/${props.posterName}`)
        props.reload();
    }
    async function addFriend(){
        await axios.post(`http://localhost:8080/api/user/add-friend/${currentName}/${props.posterName}`)
        props.reload();
    }

    async function delPostHandler(){
        await axios.delete(`http://localhost:8080/api/discussion/delete-post/${props.id}`)
        props.reload();
    }

    function delCommentHandler(){
        setCommentSelectable(!commentSelectable);
    }
    async function deleteComment(id){
        if(commentSelectable){
            await axios.delete(`http://localhost:8080/api/discussion/delete-comment/${id}`)
        }
        setCommentSelectable(false);
        openPost();
        setOpenOptions(false);
    }
   
    if(props.A === "1"){
        return (
            <div className ='super-cont'>
                <div className='cont'>

                
                    <div className={props.friends.includes(props.posterName) ? 'post friend-post' : 'post'}>

                        <div className='post-container' onClick={closePost}>
                        
                            <div className='first-part'>
                                <h1>{props.title}</h1>
                                <h3 className = {props.friends.includes(props.posterName) ? 'green' : '' }>Posted By: {props.posterName}</h3>
                                <p>{props.post}</p>
                            </div>
                            <div className='add-friend'>
                                {!props.friends.includes(props.posterName) && <button className='friend-button' onClick ={addFriend}>Add Friend</button>}
                                {props.friends.includes(props.posterName) && <button className='remove-friend-button' onClick ={delFriend}>Remove Friend</button>}
                            </div>
                        </div>
                        <div className='replies'>
                            <ul className ='replies-list'>
                                {replies.map(function(replies, index){
                                    return <li className='replies-list-item'>
                                    <h4 className='user'>{replies.username}</h4>
                                    <p>{replies.reply}</p>
                                </li>
                                })}
                            </ul>
                    
                        </div>

                        {openTextBox && <div className='user-reply'>
                            <textarea cols='3' placeholder='type response...' ref={replyRef}/>
                            <button className='response-button' onClick={replyHandler}>Post Reply</button>

                        </div>}

                        {!openTextBox && <div className='new-comment' onClick={openPostTextBox}>
                            <BiCommentAdd size={30} />
                        </div>}
                    </div>
                    <div className="dots" onClick={postOptions}>
                        <BsThreeDotsVertical size={30} />
                    </div>
                    
                </div>

                {openOptions && <div><Options delPost= {delPostHandler} delComment= {delCommentHandler} commentClicked ={commentSelectable} closeOptions={postOptions}/></div>}
            </div>
        );
    
    
    }else if(!postOpen){
        
        return(
            <div className={props.friends.includes(props.posterName) ? 'post friend-post' : 'post'} >
                
                <div className='post-container'>
                    <div className='first-part' onClick={openPost}>
                        <h1 >{props.title}</h1>
                        <h3 className = {props.friends.includes(props.posterName) ? 'green' : '' }>Posted By: {props.posterName}</h3>
                    </div>
                    <div className='add-friend'>
                        {!props.friends.includes(props.posterName) && <button className='friend-button' onClick ={addFriend} >Add Friend</button>}
                        {props.friends.includes(props.posterName) && <button className='remove-friend-button' >Remove Friend</button>}
                    </div>
                    
                </div>
                
    
                <div className='stats' onClick={openPostTextBox}>
                    <GoComment size={30} />
                </div>
            </div>
    
        );
    }else{
        return(
            <div className='post' >

                <div className='post-container' >
                    
                    <div className='first-part' onClick={closePost}>
                        <h1>{props.title}</h1>
                        <h3 className = {props.friends.includes(props.posterName) ? 'green' : '' }>Posted By: {props.posterName}</h3>
                        <p>{props.post}</p>
                    </div>
                    <div className='add-friend'>
                        {!props.friends.includes(props.posterName) && <button className='friend-button' onClick ={addFriend}>Add Friend</button>}
                        {props.friends.includes(props.posterName) && <button className='remove-friend-button' onClick ={delFriend}>Remove Friend</button>}
                    </div>
                </div>

                <div className='replies'>
                    <ul className ='replies-list'>
                        {replies.map(function(replies, index){
                            return <li className='replies-list-item'>
                            <h4 className='user'>{replies.username}</h4>
                            <p>{replies.reply}</p>
                        </li>
                        })}
                    </ul>
                    
                </div>

                {openTextBox && <div className='user-reply'>
                    <textarea cols='3' placeholder='type response...' ref={replyRef}/>
                    <button className='response-button' onClick={replyHandler}>Post Reply</button>

                </div>}

                {!openTextBox && <div className='new-comment' onClick={openPostTextBox}>
                    <BiCommentAdd size={30} />
                </div>}
            </div>
        );
        
    }
  

}
export default Post;