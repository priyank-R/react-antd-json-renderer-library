import React, { useState } from "react";
import { Form, Button, List, Input } from "antd";
import * as _ from "lodash";
import { Comment } from "@ant-design/compatible";

const { TextArea } = Input;

const Conversations = ({ children: comments, ...props }) => {
  const [commentText, setCommentText] = useState("");

  const handleChange = (e) => {
    if (e.target.value.trim() !== "") {
      setCommentText(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    comments = [...comments, { content: commentText, author: "User" }];
    setCommentText("");
  };

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
        <TextArea rows={2} onChange={handleChange} value={commentText} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" onClick={handleSubmit} type="primary">
          Add Comment
        </Button>
      </Form.Item>
    </div>
  );
};

export default Conversations;
