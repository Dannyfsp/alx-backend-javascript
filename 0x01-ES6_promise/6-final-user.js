import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName)])
    .then((result) => {
      const arr = [];
      result.forEach((index) => {
        if (index.status === 'fulfilled') {
          arr.push({
            status: index.status,
            value: index.value,
          });
        } else {
          arr.push({
            status: index.status,
            value: `Error ${index.reason.message}`,
          });
        }
      });
      return arr;
    });
}
