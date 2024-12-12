import React from "react";
import UserCard from "../components/clientCard";
import UserFetchClient from "../hooks/userFetchClient";

const clientList: React.FC = () => {
    const {users, loading} =UserFetchClient();
   
    if (loading) return <p>Loading users...</p>
    
    return (
        <div className="client-list"> 
            {users.map((user: any) => (
                <UserCard key={user.id} username={user.username} email={user.email} /> 
            ))}
        </div>
    );
};

export default clientList;