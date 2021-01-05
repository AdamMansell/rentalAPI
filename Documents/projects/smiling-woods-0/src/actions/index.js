import * as c from './ActionTypes';

export const deleteContact = id => ({
  type: c.DELETE_CONTACT,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addContact = (ticket) => {
  const { name, location, id } = ticket;
  return {
    type: c.ADD_CONTACT,
    name: name,
    location: location,
    id: id, 
  }
}

export const updateTime = (id, formattedWaitTime) => ({
  type: c.UPDATE_TIME, 
  id: id, 
  formattedWaitTime: formattedWaitTime
})