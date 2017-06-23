import {
  SET_ASIDE_DOMINFO,
  SET_NAVIGATION_DOMINFO,
  SET_SKILLS_DOMINFO,
} from '../constants';

export function setAsideDomInfo({ width, left, top, right, bottom }) {
  return (dispatch) => {
    dispatch({
      type: SET_ASIDE_DOMINFO,
      payload: {
        asideDomInfo: {
          width,
          left,
          top,
          right,
          bottom,
        },
      },
    });

    return true;
  };
}

export function setNavigationDomInfo({ isNavFixed }) {
  return (dispatch) => {
    dispatch({
      type: SET_NAVIGATION_DOMINFO,
      payload: {
        isNavFixed,
      },
    });

    return true;
  };
}

export function setSkillsDomInfo({ isLinksShowed }) {
  return (dispatch) => {
    dispatch({
      type: SET_SKILLS_DOMINFO,
      payload: {
        isLinksShowed,
      },
    });

    return true;
  };
}
