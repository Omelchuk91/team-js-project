import { libraryList } from './renderLibraryList';
const libraryWatchedBtn = document.querySelector('.library__watched-btn');
const libraryQueueBtn = document.querySelector('.library__queue-btn');

const libraryBtnGroup = document.querySelector('.button-group');

// window.addEventListener('load', libraryList('watchlist'));
libraryBtnGroup.addEventListener('click', onLibraryBtnsClick);

function onLibraryBtnsClick(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }

  if (evt.target.classList.contains('library__watched-btn')) {
    libraryWatchedBtn.classList.add('is-active');
    libraryQueueBtn.classList.remove('is-active');
    if (evt.target.classList.contains('is-active')) {
      libraryList('watchlist');
    }
    return;
  }

  if (evt.target.classList.contains('library__queue-btn')) {
    libraryWatchedBtn.classList.remove('is-active');
    libraryQueueBtn.classList.add('is-active');
    if (evt.target.classList.contains('is-active')) {
      libraryList('queue');
    }
    return;
  }
}
