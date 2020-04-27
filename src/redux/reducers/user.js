import { REQUEST_DATA_COURSES, SUCCESS_DATA_COURSES, ERROR_DATA_COURSES,
        SET_COURSE_SELECTED } from '../actions/types'


const initialState = {
  courses: [],
  loading: false,
  error: null,
  courseSelected: null
}

export default (state = initialState, action) => {
  switch(action.type){

    case REQUEST_DATA_COURSES:
      return {
        ...state,
        loading: true,
        error: null
      }

    case SUCCESS_DATA_COURSES:
      return {
        ...state,
        loading: false,
        courses: action.payload
      }

    case ERROR_DATA_COURSES:
      return {
        ...state,
        loading: false,
        error: action.payload,
        items: []
      }

    case SET_COURSE_SELECTED:
      return {
        ...state,
        courseSelected: action.payload
      }

    default:
      return state
  }
}
