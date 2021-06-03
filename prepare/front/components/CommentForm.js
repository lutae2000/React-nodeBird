import { Input } from 'antd';
import React,{useCallback} from 'react';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';
import {Form, Button} from 'antd';
import { useSelector } from 'react-redux';

const CommentForm = ({post}) => {
    const id = useSelector((state) => state.user.me?.id);
    const [commentText, onChangeCommentText] = useInput('');
    const onSubmitComment = useCallback(
        () => {
            console.log(post.id, commentText);
        },
        [commentText],
    )

    return (
        <Form onFinish={onSubmitComment}>
            <Form.Item>
                <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={5} />
                <Button type="primary" htmlType="submit" style={{float:'right'}}>삐약</Button>
            </Form.Item>
        </Form>
    );
}

CommentForm.propTypes = {
    post : PropTypes.object.isRequired,
}

export default CommentForm;