import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR
} from './types';

// GET TECHS
export const getTechs = () => async dispatch => {
  setLoading();
  try {
    dispatch({
      type: GET_TECHS
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText
    });
  }
};

// ADD TECH TO SERVER
export const addTech = tech => async dispatch => {
  try {
    setLoading();
    dispatch({
      type: ADD_TECH,
      payload: tech
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText
    });
  }
};

// DELETE TECH FROM SERVER

export const deleteTech = id => async dispatch => {
  try {
    setLoading();
    dispatch({
      type: DELETE_TECH,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText
    });
  }
};

//SET LOADING TO TRUE
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
