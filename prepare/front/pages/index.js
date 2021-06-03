import { useSelector } from 'react-redux';
import React from 'react';
import PostCard from '../components/PostCard';
import AppLayout from "../components/AppLayout";
import PostForm from '../components/PostForm';



const Home = () => {
    const {isLoggedIn} = useSelector((state) => state.user);
    const {mainPosts} = useSelector((state) => state.post);

    return (
        <AppLayout>
            {isLoggedIn && <PostForm />}
            {mainPosts.map((post) => {
                return(
                    <PostCard key={post.id} post={post} />
                );  
            })}
        </AppLayout>
    );
}

export default Home;