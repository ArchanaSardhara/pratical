import { REQUEST_USER, RECEIVE_USER } from './type';

function loadUserData() {
  return {
    type: REQUEST_USER
  }
}

function receiveUsers(json) {
  return {
    type: RECEIVE_USER,
    userList: json
  }
}

function fetchUserData() {
  return dispatch => {
    dispatch(loadUserData())
    return fetch(`https://api.spacexdata.com/v3/launches?limit=100`)
      .then(response => response.json())
      .then(json => dispatch(receiveUsers(json)))
  }
}

function shouldFetchAppsUser(state) {
  const userList = state.userList;
  if (userList.length == 0) {
    return true
  } else if (state.isFetching) {
    return false
  }
}

export function fetchUsers() {
  return (dispatch, getState) => {
    if (shouldFetchAppsUser(getState())) {
      return dispatch(fetchUserData())
    }
  }
}
