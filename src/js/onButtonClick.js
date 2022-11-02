import {
  saveInputLocalStorage,
  savePaginationLocalStorage,
  parseInputLocalStorege,
  parsePaginationLocalStorage,
} from './local-storage';

let fetch = {};
console.log(fetch);
const watched = parsePaginationLocalStorage(`allWatchedMovies`);
const queue = parsePaginationLocalStorage(`allQueueMovies`);
export const allWatched = watched ? JSON.parse(watched) : [];
export const allQueue = queue ? JSON.parse(queue) : [];

export const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    saveInputLocalStorage(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

export const load = key => {
  try {
    const serializedState = parseInputLocalStorege(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

function createConst(obj) {
  fetch = obj;
  console.log(fetch);
}

function addWatched() {
  const addWatchedBtn = document.querySelector('.js-watch');
  addWatchedBtn.addEventListener('click', onAddWatchedClick);
}

function textContentWatched(id) {
  const activeBtn = document.querySelector('.js-watch');
  const savedId = load('allWatchedMovies');
  if (savedId) {
    const getUserWithEmail = savedId.find(movie => movie.id === id);
    if (getUserWithEmail) {
      activeBtn.classList.add('is-active');
      activeBtn.textContent = 'Remove from watched';
    }
  }
}

function onAddWatchedClick(e) {
  const currentActiveBtn = document.querySelector('.js-watch.is-active');
  const savedLocalInfo = load('allWatchedMovies');
  e.currentTarget.classList.toggle('is-active');

  if (currentActiveBtn) {
    let index;
    savedLocalInfo.forEach(({ id }, i) => (id === fetch.id ? (index = i) : i));
    allWatched.splice(index, 1);
    save(`allWatchedMovies`, allWatched);
  }

  const isInArray = savedLocalInfo
    ? savedLocalInfo.find(({ id }) => id === fetch.id)
    : false;

  e.currentTarget.textContent = 'add to Watched';

  if (!isInArray) {
    return;
  }

  e.currentTarget.textContent = 'Remove from watched';
  allWatched.push(fetch);
  save(`allWatchedMovies`, allWatched);
}

function addQueue() {
  const addWatchedBtn = document.querySelector('.js-queue');
  addWatchedBtn.addEventListener('click', onAddQueueClick);
}

function textContentQueue(id) {
  const activeBtn = document.querySelector('.js-queue');
  const savedId = load('allQueueMovies');
  if (savedId) {
    const getUserWithEmail = savedId.find(movie => movie.id === id);
    if (getUserWithEmail) {
      activeBtn.classList.add('is-active');
      activeBtn.textContent = 'remove from queue';
    }
  }
}

function onAddQueueClick(e) {
  const currentActiveBtn = document.querySelector('.btn-queue.is-active');
  const savedLocalInfo = load('allQueueMovies');
  e.currentTarget.classList.toggle('is-active');

  if (currentActiveBtn) {
    let index;
    savedLocalInfo.forEach(({ id }, i) => (id === fetch.id ? (index = i) : i));
    allQueue.splice(index, 1);
    save(`allQueueMovies`, allQueue);
  }

  const isInArray = savedLocalInfo
    ? savedLocalInfo.find(({ id }) => id === fetch.id)
    : false;

  e.currentTarget.textContent = 'add to Queue';

  if (!!isInArray) {
    return;
  }

  e.currentTarget.textContent = 'Remove from Queue';
  allQueue.push(fetch);
  save(`allQueueMovies`, allQueue);
}

export {
  createConst,
  addWatched,
  addQueue,
  textContentWatched,
  textContentQueue,
};
