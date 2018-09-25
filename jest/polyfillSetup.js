global.requestAnimationFrame = (cb) => {
  setTimeout(cb, 0);
};

window.matchMedia = window.matchMedia
  || (() => ({
    matches: false,
    addListener() {},
    removeListener() {},
  }));
