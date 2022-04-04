import React, {useContext, useState} from 'react';
import { UserContext }  from '../../UserContext';
import Navbar from '../../Navbar';

import Post from '../../ui/Post';
import './PostPage.scss';

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

    
    return(
        <div className='all-posts'>
            <Navbar/>
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