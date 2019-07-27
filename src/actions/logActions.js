import {
  GET_LOGS,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SET_LOADING,
  LOGS_ERROR
} from './types';

//GET LOGS
export const getLogs = () => async dispatch => {
  try {
    setLoading();
    dispatch({
      type: GET_LOGS
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText
    });
  }
};

//ADD A NEW LOG
export const addLog = log => async dispatch => {
  try {
    setLoading();
    dispatch({
      type: ADD_LOG,
      payload: log
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText
    });
  }
};

//DELETE LOG
export const deleteLog = id => async dispatch => {
  try {
    setLoading();

    dispatch({
      type: DELETE_LOG,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText
    });
  }
};

//UPDATE LOG
export const updateLog = log => async dispatch => {
  try {
    setLoading();

    dispatch({
      type: UPDATE_LOG,
      payload: log
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText
    });
  }
};

//SET CURRENT LOG
export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log
  };
};

//CLEAR CURRENT LOG
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};

//SET LOADING TO TRUE
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
