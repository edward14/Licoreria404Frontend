import React from "react";

interface clientCardProps {
    username: string;
    email: string;
    }

const UserCard: React.FC<clientCardProps> = ({ username, email }) => {
    return (
        <div className="user-card">
            <h3>{username}</h3>
            <p>{email}</p>
        </div>
    );
};

export default UserCard;