export default {
  isMobile: () => window.matchMedia('(max-width: 480px)').matches,
  isTablet: () => window.matchMedia('(min-width:481px) and (max-width: 768px)').matches,
  isTabletLanscape: () => window.matchMedia('(min-width:769px) and (max-width: 992px)').matches,
  isFullScreen: () => window.matchMedia('(min-width:993px) and (max-width: 1200px)').matches,
};
