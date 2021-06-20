import { Card } from 'antd';
import { Avatar, Button} from 'antd';
import React,{useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutRequestAction } from '../reducers/user';

const UserProfile = () =>{
    const dispatch = useDispatch();
    const { me } = useSelector((state) => state.user);
    const onLogOut = useCallback(
        () => {
            dispatch(logoutRequestAction);
        },
        [],
    );

    return(
        <Card
            actions={[
                <div key="twitt">짹짹</div>,
                <div key="followings">팔로잉</div>,
                <div key="follower">팔로워</div>
            ]}
        >
        
        <Card.Meta
                avatar={<Avatar>{me.nickname[0]}</Avatar>}
            title={me.nickname}
        />
        <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
        
    )
}

export default UserProfile;