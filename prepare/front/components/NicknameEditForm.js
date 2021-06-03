import React, {useMemo} from 'react';
import { Form, Input} from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NicknameEditForm = () => {
    const style = useMemo(() => ({marginBottom: '20px', border: '1px solid #d9d9d9', padding: '20px'}))
 
    //const [nickname, onChangeNickname] = useInput(me?.nickname || '');
    return (
        <Form style={style}>
          <Input.Search
            //value={nickname}
            //onChange={onChangeNickname}
            addonBefore="닉네임"
            enterButton="수정"
            //onSearch={onSubmit}
          />
        </Form>
      );
}


export default NicknameEditForm;