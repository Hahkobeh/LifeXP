import React, {useRef, useState} from 'react';

import {GoComment} from 'react-icons/go';
import {BiCommentAdd} from 'react-icons/bi';
import {BsThreeDotsVertical} from 'react-icons/bs';
import Options from './Options';
import './Post.scss';

function Post(props){

    const isAdmin = localStorage.getItem('type');

    const [postOpen, setPostOpen] = useState(false);
    const [openTextBox, setOpenTextBox] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);
    const [commentSelectable, setCommentSelectable] = useState(false);

    const replyRef = useRef();

    function openPost(){
        setPostOpen(!postOpen);
    }

    function closePost(){
        setPostOpen(false);
        setOpenTextBox(false);
    }

    function openPostTextBox(){
        setPostOpen(true);
        setOpenTextBox(true);
    }

    function replyHandler(){
        console.log(replyRef.current.value);
    }
    var replies = props.replies;

    function postOptions(){
        setOpenOptions(!openOptions);
        setCommentSelectable(false);
    }

    function delPostHandler(){

    }

    function delCommentHandler(){
        setCommentSelectable(true);
    }
    function deleteComment(){
        if(commentSelectable){
            //delete the comment
        }
        setCommentSelectable(false);
    }

    if(isAdmin === 1){

        return (
            <div className ='super-cont'>
                <div className='cont'>

                
                    <div className='post' >

                        <div className='post-container' onClick={closePost}>
                            <h1>{props.title}</h1>
                            <h3>Posted By: {props.posterName}</h3>
                            <p>{props.post}</p>
                        </div>

                        <div className='replies'>
                            <ul className ='replies-list'>
                                {replies.map(function(replies, index){
                                    return <li className='replies-list-item' onClick={deleteComment}>
                                    <h4 className='user'>{replies['username']}</h4>
                                    <p>{replies['reply']}</p>
                                </li>
                                })}
                            </ul>
                            
                        </div>

                        {openTextBox && <div className='user-reply'>
                            <textarea cols='3' placeholder='type response...' ref={replyRef}/>
                            <button onClick={replyHandler}>Post Reply</button>

                        </div>}

                        {!openTextBox && <div className='new-comment' onClick={openPostTextBox}>
                            <BiCommentAdd size={30} />
                        </div>}
                    </div>
                    <div className="dots" onClick={postOptions}>
                        <BsThreeDotsVertical size={30} />
                    </div>
                    
                </div>

                {openOptions && <div><Options delPost= {delPostHandler} delComment= {delCommentHandler} closeOptions={postOptions}/></div>}
            </div>
        );
    
    
    }else if(!postOpen){
        return(
            <div className='post' onClick={openPost}>
                
                <div className='post-container'>
                    <h1>{props.title}</h1>
                    <h3>Posted By: {props.posterName}</h3>
                </div>
                
    
                <div className='stats' onClick={openPostTextBox}>
                    <GoComment size={30} />
                    <h3>{props.commentNum} Comments</h3>
                    
                </div>
            </div>
    
        );
    }else{
        return(
            <div className='post' >

                <div className='post-container' onClick={closePost}>
                    <h1>{props.title}</h1>
                    <h3>Posted By: {props.posterName}</h3>
                    <p>{props.post}</p>
                </div>

                <div className='replies'>
                    <ul className ='replies-list'>
                        {replies.map(function(replies, index){
                            return <li className='replies-list-item'>
                            <h4 className='user'>{replies['username']}</h4>
                            <p>{replies['reply']}</p>
                        </li>
                        })}
                    </ul>
                    
                </div>

                {openTextBox && <div className='user-reply'>
                    <textarea cols='3' placeholder='type response...' ref={replyRef}/>
                    <button onClick={replyHandler}>Post Reply</button>

                </div>}

                {!openTextBox && <div className='new-comment' onClick={openPostTextBox}>
                    <BiCommentAdd size={30} />
                </div>}
            </div>
        );
        
    }
  

}
export default Post;