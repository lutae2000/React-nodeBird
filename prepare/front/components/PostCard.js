import React ,{useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Popover, Avatar, List, Comment } from 'antd';
import { RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined, HeartTwoTone } from '@ant-design/icons';
import PostImages from '../components/PostImages';
import {useSelector} from 'react-redux';
import CommentForm from '../components/CommentForm';
import PostCardContent from './PostCardContent';

const PostCard = ( {post} ) =>{
    const id = useSelector((state) => state.user.me?.id);
    const [liked, setLiked] = useState(false);
    const [commentFormOpened, setCommentFormOpend] = useState(false);
    const onToggleLike = useCallback(
        () => {
            setLiked((prev) => !prev);
        },
        [],
    );
    const onToggleComment = useCallback(
        () => {
            setCommentFormOpend((prev) => !prev);
        },
        [],
    );
    return(
        <div style={{marginBottom: 10}}>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[
                    <RetweetOutlined key="retweet"/>,
                    liked 
                    ? <HeartTwoTone twoToneColor="#FF0000" key="heart" onClick={onToggleLike} />
                    : <HeartOutlined key="heart" onClick={onToggleLike} />,
                    <MessageOutlined key="comment" onClick={onToggleComment} />,
                    <Popover key="more" content={(
                        <Button.Group>
                            {id && post.User.id === id ? ( 
                                <>
                                <Button>수정</Button>
                                <Button type="danger">삭제</Button>
                                </>
                            ) : <Button>신고</Button>}
                        </Button.Group>
                    )}>
                        <EllipsisOutlined />
                    </Popover>
                ]}
            >
                <Card.Meta
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={<PostCardContent postData={post.hashtag} />}
                    // description={post.content}
                /> 


                {/* <Image /> */} 
                {/* <Content /> */}
                <Button />
            </Card>
            {commentFormOpened && ( 
                    <div>
                        <CommentForm />
                        <List
                            header={`${post.Comments.length}개의 댓글`}
                            itemLayout="horizontal"
                            dataSource={post.Comments}
                            renderItem={(item) => (
                                <li>
                                    <Comment
                                        author={item.User.nickname}
                                        avatar={<Avatar>{item.User.nickname}</Avatar>}
                                        content={item.content}

                                    />
                                </li>
                            )}
                        />
                    </div>
                )}
            {/* <CommentForm /> */}
            {/* <Comments /> */}
        </div>
    )
};

PostCard.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        User: PropTypes.object,
        content: PropTypes.string,
        createAT: PropTypes.object,
        Comments: PropTypes.arrayOf(PropTypes.object),
        Images: PropTypes.arrayOf(PropTypes.object),

    }).isRequired,
}

export default PostCard;