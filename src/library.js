import { auth } from './js/firebase/auth';
import {
  // createUserWithEmailAndPassword,
  // signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import refs from './js/refs';
import {
  addAuthBtns,
  removeAuthBtns,
  addNav,
  removeNav,
  renderNav,
  addLogOutButton,
} from './js/auth/auth-nav';
import { insertData, readData } from './js/firebase/db-service';
import './js/onLibraryBtnsClick';

renderNav('library');

onAuthStateChanged(auth, user => {
  if (user) {
    const uid = user.uid;
    localStorage.setItem('auth', 1);
    removeAuthBtns();
    // addNav('library');
    addLogOutButton();
    // insertData(7, 'watchlist');
  } else {
    console.log('User is signed out');
    localStorage.setItem('auth', 0);
    location.replace('./index.html');
  }
});

import { showInfoModal } from './js/model-info-film';
import { renderLibraryList } from './js/renderLibraryList';

export const watchList = [];
export const queueList = [436270, 944864, 724495];

window.addEventListener('load', renderLibraryList(watchList));
