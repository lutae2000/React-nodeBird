import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const PostCardContent = ({ postData }) => ( //해시태그 하이퍼링 추가
    <div>
        {postData.split(/(#[^\s#]+)/g).map((v, i) => {
            if (v.match(/(#[^\s#]+)/)) {
                return (
                    <Link
                        href={'/hashtag/${v.slice(1)}'}
                        key={i}
                    >
                        <a>{v}</a>
                    </Link>
                );
            }
            return v;
        })}
    </div>
);

PostCardContent.propTypes = {
    postData: PropTypes.string.isRequired
};


export default PostCardContent;

