import React from 'react';

import './Card.scss';
import {GiCancel} from 'react-icons/gi';
import './Options.scss';

function Options(props){
    return(
        <div className="opt-card">

            <div className='instr-top'>
                <GiCancel onClick={props.closeOptions}/>
            </div>
            <button onClick={props.delPost} id="del-post-button">Delete Post</button>
            
            {!props.commentClicked && <button onClick={props.delComment} id="del-comment-button">Delete Comment</button>}

            {props.commentClicked && <button onClick={props.delComment} id="del-comment-button-clicked">Click a comment to delete it</button>}
        
        
        </div>
    );
}

export default Options;