import axios from 'axios';
export const GH_USERS = 'https://api.github.com/users/';

export const getProfile = async (accountName: string) => {
  const url = `${GH_USERS}${accountName}`;

  return await axios.get(url)
    .then(async (res: any) => {
      
      let repos;
      if (res.data.repos_url) {
        repos = await axios.get(res.data.repos_url)
      }
      res.data.repos = repos;
      return res;
    })
    /* tslint:disable */
    .catch(err => console.log(err));
    /* tslint:enable */
}
