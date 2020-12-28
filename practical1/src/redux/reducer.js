import { REQUEST_USER, RECEIVE_USER } from './type';

const initialState = {
  userList: [],
  isFetching: false
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_USER:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_USER:
      return Object.assign({}, state, {
        isFetching: false,
        userList: action.userList
      });
    default:
      return state
  }
}

export default reducer