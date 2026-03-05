import React, { useState, useEffect } from 'react';
import PostMenu from "./PostMenu";

function UserPosts({ username }) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const deletePost = async (postId) => {
        try {
            const response = await fetch(`/api/posts/${postId}`, {
                method: "DELETE",
                headers: { "x-username": username }
            });
            const result = await response.json();
            
            if (response.status === 200) {
                setPosts(prev => prev.filter(p => p._id !== postId));
            } else {
                alert(result?.error || "Failed to delete post");
            }
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const response = await fetch('/api/posts');
                const result = await response.json();

                if (Array.isArray(result)) {
                    const filtered = result.filter(p => p.user === username);
                    setPosts(filtered);
                }
            } catch (error) {
                console.error("Error loading posts:", error);
            } finally {
                setLoading(false);
            }
        };

        if (username) {
            loadPosts();
        }
    }, [username]);

    if (loading) return <div className="loading">Loading your posts...</div>;

    return (
        <div className="postContainer">
            {posts.length > 0 ? (
                posts.map(post => (
                    <div className="post-card" key={post._id}>
                        <PostMenu
                        postId={post._id}
                        postUser={post.user}
                        currentUsername={username}
                        onDelete={deletePost}
                        />
                        <div className="post-header">
                            <img src={`/images/${post.userpfp}`} className="post-pfp" alt="pfp" />
                            <h3 className="post-username">{post.user}</h3>
                        </div>
                        <div className="post-content">
                            <p>{post.content}</p>
                            {post.image && <img src={`/images/${post.image}`} className="post-image" alt="post" />}
                        </div>
                    </div>
                ))
            ) : (
                <p>No posts found for this user.</p>
            )}
        </div>
    );
}

export default UserPosts;