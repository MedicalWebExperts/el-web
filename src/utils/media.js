export default {
  isMobile: window.matchMedia('max-width: 480px').matches,
  isTablet: window.matchMedia('max-width: 769px').matches,
  isFullScreen: window.matchMedia('max-width: 1200px').matches,
};
