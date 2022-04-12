import React, {useRef, useEffect, useState} from 'react';
import { UserContext }  from '../../UserContext';
import Navbar from '../../Navbar';
import {BsPlusCircle} from 'react-icons/bs';
import Backdrop from './Backdrop';
import AddPost from './AddPost';
import Post from '../../ui/Post';
import './PostPage.scss';

import axios from "axios";
       

const PostPage = () =>{

    const [click, setClick] = useState(false);
    const topicRef = useRef();
    const [posts, setPosts] = useState([]);
    const [friends, setFriends] = useState([]);

    function handleClick(){
        handleChange();
        setClick(!click);
    } 
    useEffect( ()=> {
        handleChange();
    }, []);
    const isAdmin = localStorage.getItem('type');
    const currentName = localStorage.getItem('username');

    async function handleChange(){
        

        await axios.get(`http://localhost:8080/api/discussion/get-posts/${topicRef.current.value}`)
            .then( res=> {
                setPosts(res.data);
        });

        await axios.get(`http://localhost:8080/api/user/get-friends/${currentName}`)
            .then( res => {
                setFriends(res.data);
        });
    }

    
    return(
        <div className='all-posts'>
            <Navbar/>

            {click && <AddPost board={topicRef.current.value} handler={handleClick}/>}
            {click && <Backdrop onCancel={handleClick}/>}

            <ul className="i-hate-having-to-add-this">

                    <div className='add' onClick={handleClick}>
                        <BsPlusCircle size={40}/>
                    </div>
            </ul>

            <div className='post-page-dropdown'>
                <label className='post-topics-label' for="post-topics">Topics:  </label>
                <select name="post-topics" onChange={handleChange} ref={topicRef}>
                    <option value="Stories">Stories</option>
                    <option value="Reviews">Reviews</option>
                    <option value="Help">Help</option>
                </select>
                
            </div>

            <ul className ='post-list'>
            {posts.map(function(posts, index){
                return <li className='post-list-item'>
                    <Post friends= {friends} reload= {handleChange} A= {isAdmin}id={posts.id} title={posts.title} 
                     post={posts.body} posterName={posts.username}/>
                    </li>
            })}

            </ul>
           

        </div>


    );

}

export default PostPage;