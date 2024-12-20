import React from 'react';

import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({id, name, username, email, address, phone, website, company }) => {
    return (
      <div className="w-full max-w-xl hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-500">@{username}</p>

        <div className="flex items-start gap-2">
            <span>{id}</span>
            <span>{email}</span>
            <span>{phone}</span>
            <p>{address?.street}</p>
        </div>
        </div>
    )
}
export default UserCard;