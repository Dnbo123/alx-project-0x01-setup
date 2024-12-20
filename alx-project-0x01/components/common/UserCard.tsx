// components/common/UserCard.tsx
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Building2, Globe, Mail, MapPin, Phone } from 'lucide-react';
import { UserProps } from '@/interfaces';

interface UserCardProps {
  user: UserProps;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <Card className="w-full max-w-xl hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-2xl font-bold text-blue-600">
                {user.name.charAt(0)}
              </span>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-gray-500">@{user.username}</p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-500" />
                <a href={`mailto:${user.email}`} className="text-blue-600 hover:underline">
                  {user.email}
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-500" />
                <span>{user.phone}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-gray-500" />
                <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" 
                   className="text-blue-600 hover:underline">
                  {user.website}
                </a>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gray-500 mt-1" />
                <div>
                  <p>{user.address.street}</p>
                  <p>{user.address.suite}</p>
                  <p>{user.address.city}, {user.address.zipcode}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t">
            <div className="flex items-start gap-2">
              <Building2 className="w-4 h-4 text-gray-500 mt-1" />
              <div>
                <p className="font-semibold">{user.company.name}</p>
                <p className="text-gray-600 italic">&quot;{user.company.catchPhrase}&quot;</p>
                <p className="text-gray-500 text-sm">{user.company.bs}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;