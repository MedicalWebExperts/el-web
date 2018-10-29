const canUseDOM = !!(
  typeof window !== 'undefined'
  && window.document
  && window.document.createElement
);

export default {
  isMobile: () => {
    if (canUseDOM) {
      return window.matchMedia('(max-width: 480px)').matches;
    }
    return false;
  },
  isTablet: () => {
    if (canUseDOM) {
      return window.matchMedia('(min-width:481px) and (max-width: 768px)').matches;
    }
    return false;
  },
  isTabletLanscape: () => {
    if (canUseDOM) {
      return window.matchMedia('(min-width:769px) and (max-width: 992px)').matches;
    }
    return false;
  },
  isFullScreen: () => {
    if (canUseDOM) {
      return window.matchMedia('(min-width:993px) and (max-width: 1200px)').matches;
    }
    return true;
  },
};
