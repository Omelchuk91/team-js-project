import { renderWatched, watchList, queueList } from '../library';
const libraryWatchedBtn = document.querySelector('.library__watched-btn');
const libraryQueueBtn = document.querySelector('.library__queue-btn');

const libraryBtnGroup = document.querySelector('.button-group');

libraryBtnGroup.addEventListener('click', onLibraryBtnsClick);

function onLibraryBtnsClick(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }

  if (evt.target.classList.contains('library__watched-btn')) {
    libraryWatchedBtn.classList.add('is-active');
    libraryQueueBtn.classList.remove('is-active');
    if (evt.target.classList.contains('is-active')) {
      renderWatched(watchList);
    }
    return;
  }

  if (evt.target.classList.contains('library__queue-btn')) {
    libraryWatchedBtn.classList.remove('is-active');
    libraryQueueBtn.classList.add('is-active');
    return;
  }
}
