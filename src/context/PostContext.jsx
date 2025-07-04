import React, { createContext, useEffect, useState } from "react";

export const PostContext = createContext();

const PostProvider = ({children}) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);

    useEffect(()=>{
        const fetchPosts = async () =>{
            setLoading(true);
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            setPosts(data);
            setTimeout(() => setLoading(false), 5000);
        };
        fetchPosts();
    },[]);

    return(
        <PostContext.Provider value={{posts, setPosts, page, setPage, loading}}>
            {children}
        </PostContext.Provider>
    )
}

export default PostProvider;