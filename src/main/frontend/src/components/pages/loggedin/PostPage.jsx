import React, {useRef, useState} from 'react';
import { UserContext }  from '../../UserContext';
import Navbar from '../../Navbar';
import {BsPlusCircle} from 'react-icons/bs';
import Backdrop from './Backdrop';
import AddPost from './AddPost';
import Post from '../../ui/Post';
import './PostPage.scss';
import AddGoal from './AddGoal';

var posts = [
    {   id: 1,
        title: "Amazing new Goal",
        username: 'harry richard',
        body: "I found adding a goal to go to the gym every day has been a great motivator and reminder",
        replies: [
            {
                username: 'anya neeze',
                reply: "same I thought so too"
            },
            {
                username: 'harry richard',
                reply: "I am going to try doing this"
            }
            
        ]
    },
    { id: 2,
        title: "Amazing progress",
        username: 'dill doe',
        body: "I found adding a goal to attend class has kept me honest baout my attendence",
        replies: [
            {
                username: 'boo gure',
                reply: "same I thought so too"
            },
            {
                username: 'sleezy sneexy',
                reply: "I am going to try doing this"
            },
            {
                username: 'harry richard',
                reply: "I am going to try doing this"
            }
            
        ]
    },
    {   
        id: 3,
        title: "New Method",
        username: 'The One Who knocks',
        body: "I found adding a goal to attend class has kept me honest baout my attendence",
        replies: [
            
            
        ]
    },


];
       

const PostPage = () =>{

    const [click, setClick] = useState(false);
    const topicRef = useRef();

    function handleClick(){
        
        setClick(!click);
    } 

    function handleChange(){
        console.log("it should have changed to " + topicRef.current.value)
    }

    
    return(
        <div className='all-posts'>
            <Navbar/>

            {click && <AddPost handler={handleClick}/>}
            {click && <Backdrop onCancel={handleClick}/>}

            <ul className="i-hate-having-to-add-this">

                    <div className='add' onClick={handleClick}>
                        <BsPlusCircle size={40}/>
                    </div>
            </ul>

            <div className='post-page-dropdown'>
                <label className='post-topics-label' for="post-topics">Topics:  </label>
                <select name="post-topics" onChange={handleChange} ref={topicRef}>
                    <option value="stories">Stories</option>
                    <option value="reviews">Reviews</option>
                    <option value="help">Help</option>
                </select>
                
            </div>

            <ul className ='post-list'>
            {posts.map(function(posts, index){
                return <li className='post-list-item'>
                    <Post id={posts['id']} title={posts['title']} 
                    commentNum={posts['replies'].length} replies={posts['replies']} post={posts['body']} posterName={posts['username']}/>
                    </li>
            })}

            </ul>
           

        </div>


    );

}

export default PostPage;