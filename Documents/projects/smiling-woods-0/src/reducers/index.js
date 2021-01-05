import formVisibleReducer from './form-visible-reducer';
import contactListReducer from './contact-list-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterContactList: contactListReducer,
  firestore: firestoreReducer
});

export default rootReducer;