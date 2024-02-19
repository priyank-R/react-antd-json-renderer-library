import React, { useState } from "react";
import { Avatar, Form, Button, List, Input } from "antd";
import * as _ from "lodash";
import { Comment } from "@ant-design/compatible";

const { TextArea } = Input;

const Conversations = ({ children: comments }) => {
  const [commentText, setCommentText] = useState("");

  //   const handleSubmit = () => {
  //     if (commentText.trim() !== "") {
  //       setComments([...comments, { content: commentText, author: "User" }]);
  //       setCommentText("");
  //     }
  //   };

  return (
    <div>
      <List
        className="comment-list"
        header={`${comments.length} comments`}
        itemLayout="horizontal"
        dataSource={comments}
        renderItem={(item) => (
          <li>
            <Comment
              author={item.user}
              content={item.content}
                // avatar={<Avatar>{item.author[0]}</Avatar>}
            />
          </li>
        )}
      />
      <Form.Item>
        <TextArea
          rows={2}
          onChange={(e) => setCommentText(e.target.value)}
          value={commentText}
        />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" onClick={() => {}} type="primary">
          Add Comment
        </Button>
      </Form.Item>
    </div>
  );
};

export default Conversations