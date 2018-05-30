import { getProfile } from '../github-services';
import { Dispatch } from 'react-redux';

import * as constants from './constants'

export interface IFetchProfile {
  type: constants.FETCH_PROFILE
  payload: any
}

export const fetchProfile = (accountName: string) => {

  return async (dispatch: Dispatch<IFetchProfile>, getState: any) => {
    try {
      const res = await getProfile(accountName);
      dispatch({ type: constants.FETCH_PROFILE, payload: res.data });
    } catch (e) {
      /* tslint:disable */
      console.log(e);
      /* tslint:enable */
    }
  }
};
