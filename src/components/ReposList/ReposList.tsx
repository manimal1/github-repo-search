import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import './ReposList.css';

interface IReposListProps {
  repos: any
}

interface IRepoProps {
  id: number,
  name: string,
  description: string,
  html_url: string
}

export const ReposList = ({ repos }: IReposListProps) => {
  {/* tslint:disable */ }
  
  return(
    <List className="repos-list">
    {
      repos.data.map((repo: IRepoProps) => {
        return (
          <ListItem key={repo.id} className="repos-list__item">
            <a href={repo.html_url} target="_blank" className="repos-list__link">
              <Avatar>
                <FolderIcon />
              </Avatar>
              <ListItemText className="repos-list__name" primary={repo.name} secondary={repo.description} />
            </a>
          </ListItem>
        )
      })
    }
    </List>
  );
}
