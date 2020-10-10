import { BUY_CAKE, UPDATE_READING_LIST_DATA, UPDATE_IMAGE_LIST_DATA } from './Types'

const initialState = {
  numOfCakes: 10
}


const cakeReducer = (state = [], action) => {
  switch (action.type) {

    case UPDATE_READING_LIST_DATA: return {
      ...state,
      mergedData: action.payload,
    }
    case UPDATE_IMAGE_LIST_DATA: return {
      ...state,
      imageData: action.payload
    }
    default: return state
  }
}

export default cakeReducer