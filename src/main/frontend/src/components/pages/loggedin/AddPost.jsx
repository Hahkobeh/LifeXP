import React, {useState, useRef} from 'react';
import axios from "axios";
import './AddPost.scss';

function AddPost(props) {
    const currentName = localStorage.getItem('username');

    const titleRef = useRef();
    const bodyRef = useRef();

    const [noTitle, setNoTitle] = useState(false);
    const [noBody, setNoBody] = useState(false);

    async function submitPost(){

        setNoTitle(false);
        setNoBody(false);

        if(titleRef.current.value === ''){
            setNoTitle(true);
            return;
        }else if(bodyRef.current.value === ''){
            setNoBody(true);
            return;
        }
        let data = { 
            username: currentName,
            title: titleRef.current.value,
            body: bodyRef.current.value,
            boardName: props.board
        }

        await axios.post(`http://localhost:8080/api/discussion/create-post/`, data)
        props.handler();
    }

    return(
        <div className = "new-post">

            <h1 className="post-something">Talk To The LifeXP Community!</h1>
            <hr/>

            <div className = "new-post-form">

                <div className="post-name">
                    <label className = 'label'>What is the subject of your post?</label>
                    <input id="title" type='text' ref={titleRef}/>
                </div>

                {noTitle && <p className='error'>You need to enter a title</p>}

                <div className='post-body'>
                    <textarea cols='3' placeholder='...' ref={bodyRef}/>
                </div>
                {noBody && <p className='error'>You have to write something....</p>}

                <div className='create-post'>
                    <button onClick={submitPost} id="submitButton">Post!</button>
                </div>
            </div>
        </div>
    )

}


export default AddPost;