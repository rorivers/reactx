import {
  SET_ASIDE_DOMINFO,
  SET_NAVIGATION_DOMINFO,
  SET_SKILLS_DOMINFO,
} from '../constants';

export default function dominfo(state = {}, action) {
  switch (action.type) {
    case SET_ASIDE_DOMINFO: {
      return {
        ...state,
        ...action.payload,
      };
    }

    case SET_NAVIGATION_DOMINFO: {
      return {
        ...state,
        ...action.payload,
      };
    }

    case SET_SKILLS_DOMINFO: {
      return {
        ...state,
        ...action.payload,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
}
