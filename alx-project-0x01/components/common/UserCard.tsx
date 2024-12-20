import React from 'react';

import { UserProps } from "@/interfaces";

const UserCard: React.FC<{user: UserProps}> = ({ user }) => {
    return (
      <div className="w-full max-w-xl hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-xl font-bold">{user.name}</h2>
        <p className="text-gray-500">@{user.username}</p>

        <div className="flex items-start gap-2">
            <span>{user.id}</span>
            <span>{user.email}</span>
            <span>{user.phone}</span>
            <p>{user.address?.street}</p>
        </div>
        </div>
    )
}
export default UserCard;