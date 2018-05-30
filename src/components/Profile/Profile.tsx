import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './Profile.css';

interface IProfileProps {
  profile: any
}

export const Profile = ({ profile }: IProfileProps) => {
  const ghProfile = profile;
  const {login, email, html_url, avatar_url} = ghProfile;

  return(
    <div className="profile">
      <Card className="">
        <CardContent>
          {avatar_url &&
            <Avatar alt="profile-avatar" src={avatar_url} className="profile__avatar" />
          }
          <div>
            <h1 className="profile__title">{login}</h1>
            <p className="profile__email">{email}</p>
            <a href={html_url} target="_blank" className="profile__link">Github Profile</a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
};
