import * as React from 'react';
import { IAppStore } from '../../StoreModel';

import { 
  connect,
  Dispatch
} from 'react-redux';

import { Title } from '../../components/Title';
import { Profile } from '../../components/Profile';
import { ReposList } from '../../components/ReposList';
import { SearchForm } from '../../components/SearchForm';

import { fetchProfile } from '../../actions';

export interface IProfileState {
  dispatch: Dispatch<any>,
  profile: any
}

class ProfileContainer extends React.Component<IProfileState, IAppStore> {
  constructor(props: any) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  public render() {
    const { inputValue } = this.state;
    const { profile } = this.props;
    
    return (
      <div>
        <Title title="Search Github User Repos" />
        <SearchForm value={inputValue} handleChange={this.updateInputValue} handleSubmit={this.handleSubmit} />

        {profile.repos &&
          <div>
            <Profile profile={profile} />
            <ReposList repos={profile.repos} />
          </div>
        }
      </div>
    )
  }

  private updateInputValue = (e: any) => {
    this.setState({
      inputValue: e.target.value
    });
  }

  private handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.dispatch(fetchProfile(this.state.inputValue || ''))
  }
}

export const mapStateToProps = ({ profile }: any) => ({
    profile
});

export default connect(mapStateToProps, null)(ProfileContainer);
