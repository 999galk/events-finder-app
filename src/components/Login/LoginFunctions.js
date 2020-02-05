//This file is not using export default cause it exports multiple objects
export const onGoogleClick = (action) => {
  const fetchUrl = 'https://fierce-bastion-22088.herokuapp.com/googleAuth/' + action;
  fetch(fetchUrl)
  .then(res => res.json())
  .then(data => {
    console.log(data.url);
    window.location.replace(data.url);
  });
}