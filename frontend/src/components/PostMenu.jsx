import { useEffect, useRef, useState } from "react";

function PostMenu({ postId, postUser, currentUsername, onDelete }) {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);
    const isOwner = 
        (postUser || "").toLowerCase() === 
        (currentUsername || "").toLowerCase();
    
    if (!isOwner) return null;
    
    useEffect(() => {
        const handler = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        
        document.addEventListener("mousedown", handler);
        
        return () => document.removeEventListener("mousedown", handler);
    }, []);
    
    const handleDelete = () => {
        setOpen(false);
        if (onDelete) onDelete(postId);
    };
    
    return (
        <div className="post-menu" ref={menuRef}>
            <button
            type="button"
            className="post-menu-btn"
            aria-label="Post options"
            onClick={() => setOpen((v) => !v)}
            >
        ⋯
        </button>
        
        {open && (
            <div className="post-menu-dropdown">
                <button type="button" className="post-menu-item" onClick={handleDelete}>
                    Delete
                </button>
            </div>
        )}
    </div>
    );
}

export default PostMenu;