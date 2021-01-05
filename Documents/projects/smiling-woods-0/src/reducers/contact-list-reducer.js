import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, location, id } = action;
  switch (action.type) {
  case c.ADD_CONTACT:
    return Object.assign({}, state, {
      [id]: {
        name: name,
        location: location,
        id: id,
      }
    });
  case c.DELETE_CONTACT:
    const newState = { ...state };
    delete newState[id];
    return newState;

  case c.UPDATE_TIME:
    const newContact = Object.assign({}, state[id] );
    const updatedState = Object.assign({}, state, {
      [id]: newContact
    });
    return updatedState;
  default:
    return state;
  }
};