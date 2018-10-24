'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  isMobile: function isMobile() {
    return window.matchMedia('(max-width: 480px)').matches;
  },
  isTablet: function isTablet() {
    return window.matchMedia('(min-width:481px) and (max-width: 768px)').matches;
  },
  isTabletLanscape: function isTabletLanscape() {
    return window.matchMedia('(min-width:769px) and (max-width: 992px)').matches;
  },
  isFullScreen: function isFullScreen() {
    return window.matchMedia('(min-width:993px) and (max-width: 1200px)').matches;
  }
};