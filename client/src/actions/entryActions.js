import axios from 'axios';

export const CREATE_ENTRY_REQUEST = 'CREATE_ENTRY_REQUEST';
export const CREATE_ENTRY_SUCCESS = 'CREATE_ENTRY_SUCCESS';
export const CREATE_ENTRY_FAILURE = 'CREATE_ENTRY_FAILURE';

export const UPDATE_ENTRY_REQUEST = 'UPDATE_ENTRY_REQUEST';
export const UPDATE_ENTRY_SUCCESS = 'UPDATE_ENTRY_SUCCESS';
export const UPDATE_ENTRY_FAILURE = 'UPDATE_ENTRY_FAILURE';

export const DELETE_ENTRY_REQUEST = 'DELETE_ENTRY_REQUEST';
export const DELETE_ENTRY_SUCCESS = 'DELETE_ENTRY_SUCCESS';
export const DELETE_ENTRY_FAILURE = 'DELETE_ENTRY_FAILURE';

// Action creators for creating a new journal entry
export const createEntryRequest = () => ({
  type: CREATE_ENTRY_REQUEST,
});

export const createEntrySuccess = (entry) => ({
  type: CREATE_ENTRY_SUCCESS,
  payload: entry,
});

export const createEntryFailure = (error) => ({
  type: CREATE_ENTRY_FAILURE,
  payload: error,
});

export const createEntry = (title, content) => (dispatch) => {
  dispatch(createEntryRequest());
  axios
    .post('/api/entries', { title, content })
    .then((response) => {
      const entry = response.data;
      dispatch(createEntrySuccess(entry));
    })
    .catch((error) => {
      dispatch(createEntryFailure(error.message));
    });
};

// Action creators for updating an existing journal entry
export const updateEntryRequest = () => ({
  type: UPDATE_ENTRY_REQUEST,
});

export const updateEntrySuccess = (entry) => ({
  type: UPDATE_ENTRY_SUCCESS,
  payload: entry,
});

export const updateEntryFailure = (error) => ({
  type: UPDATE_ENTRY_FAILURE,
  payload: error,
});

export const updateEntry = (id, title, content) => (dispatch) => {
  dispatch(updateEntryRequest());
  axios
    .put(`/api/entries/${id}`, { title, content })
    .then((response) => {
      const entry = response.data;
      dispatch(updateEntrySuccess(entry));
    })
    .catch((error) => {
      dispatch(updateEntryFailure(error.message));
    });
};

// Action creators for deleting an existing journal entry
export const deleteEntryRequest = () => ({
  type: DELETE_ENTRY_REQUEST,
});

export const deleteEntrySuccess = (id) => ({
  type: DELETE_ENTRY_SUCCESS,
  payload: id,
});

export const deleteEntryFailure = (error) => ({
  type: DELETE_ENTRY_FAILURE,
  payload: error,
});

export const deleteEntry = (id) => (dispatch) => {
  dispatch(deleteEntryRequest());
  axios
    .delete(`/api/entries/${id}`)
    .then(() => {
      dispatch(deleteEntrySuccess(id));
    })
    .catch((error) => {
      dispatch(deleteEntryFailure(error.message));
    });
};
