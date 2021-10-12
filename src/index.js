import React from "react"
import ReactDOM from "react-dom"
import CommentDetail from "./CommentDetail"
import faker from "faker"
import ApprovalCard from "./ApprovalCard"

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning!</h4>
                Plain text comment
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    dateTime="Today at 5:00 PM"
                    content="Nice blog post"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="James"
                    dateTime="Tomorrow at 3:00 PM"
                    content="I like your writing style"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Kate"
                    dateTime="Today at 11:00 AM"
                    content="solid arguments"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector("#root"))
