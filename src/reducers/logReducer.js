import {
  GET_LOGS,
  ADD_LOG,
  DELETE_LOG,
  CLEAR_CURRENT,
  SET_CURRENT,
  UPDATE_LOG,
  SET_LOADING,
  LOGS_ERROR
} from '../actions/types';

const initialState = {
  logs: [
    {
      message: 'Input a Log Here!',
      attention: false,
      tech: 'Alejandro Gonzalez',
      date: '2019-07-27T05:20:11.463Z',
      id: 1312312
    },
    {
      message: 'We need Technicians !',
      attention: true,
      tech: 'Alejandro Gonzalez',
      date: '2019-07-27T05:21:43.072Z',
      id: 2312312312
    }
  ],
  current: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: [...state.logs],
        loading: false
      };
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false
      };
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter(log => log.id !== action.payload),
        loading: false
      };
    case UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map(log =>
          log.id === action.payload.id ? action.payload : log
        )
      };

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
        loading: false
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
        loading: false
      };
    case LOGS_ERROR:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
