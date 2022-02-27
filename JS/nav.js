const buttonHome = document.querySelector('[navButton-home]');
const buttonBookmarks = document.querySelector('[navButton-bookmarks]');
const buttonCreate = document.querySelector('[navButton-create]');
const buttonProfile = document.querySelector('[navButton-profile]');

const pageHome = document.querySelector('[dataPage-home]');
const pageBookmarks = document.querySelector('[dataPage-bookmarks]');
const pageCreate = document.querySelector('[dataPage-create]');
const pageProfile = document.querySelector('[dataPage-profile]');

buttonHome.addEventListener('click', () => {
  pageHome.classList.remove('hidden');
  pageBookmarks.classList.add('hidden');
  pageCreate.classList.add('hidden');
  pageProfile.classList.add('hidden');

  buttonHome.classList.add('active');
  buttonBookmarks.classList.remove('active');
  buttonCreate.classList.remove('active');
  buttonProfile.classList.remove('active');
});

buttonBookmarks.addEventListener('click', () => {
  pageHome.classList.add('hidden');
  pageBookmarks.classList.remove('hidden');
  pageCreate.classList.add('hidden');
  pageProfile.classList.add('hidden');

  buttonHome.classList.remove('active');
  buttonBookmarks.classList.add('active');
  buttonCreate.classList.remove('active');
  buttonProfile.classList.remove('active');
});

buttonCreate.addEventListener('click', () => {
  pageHome.classList.add('hidden');
  pageBookmarks.classList.remove('hidden');
  pageCreate.classList.add('hidden');
  pageProfile.classList.add('hidden');

  buttonHome.classList.remove('active');
  buttonBookmarks.classList.add('active');
  buttonCreate.classList.remove('active');
  buttonProfile.classList.remove('active');
});

buttonProfile.addEventListener('click', () => {
  pageHome.classList.add('hidden');
  pageBookmarks.classList.remove('hidden');
  pageCreate.classList.add('hidden');
  pageProfile.classList.add('hidden');

  buttonHome.classList.remove('active');
  buttonBookmarks.classList.add('active');
  buttonCreate.classList.remove('active');
  buttonProfile.classList.remove('active');
});

export default nav;
