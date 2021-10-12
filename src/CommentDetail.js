import React from "react"

const CommentDetail = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img src={props.avatar} alt="avatar"/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
            </div>
            <div className="metadata">
                <span className="date">{props.dateTime}</span>
            </div>
            <div className="text">{props.content}</div>
        </div>
    )
}

export default CommentDetail
