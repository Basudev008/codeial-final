import { UPDATE_POSTS } from '../actions/actionTypes';

export default function posts(state = [], action) {
  switch (action.type) {
    case UPDATE_POSTS:
      return action.posts;
      break;

    default:
      return state;
      break;
  }
}
