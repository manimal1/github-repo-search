import { IFetchProfile } from '../actions';
import { FETCH_PROFILE } from '../actions/constants';

export const fetchProfile = (state = {}, action: IFetchProfile) => {
  switch (action.type) {
    case FETCH_PROFILE:
      return action.payload || false;
    default:
      return state;
  }
}
