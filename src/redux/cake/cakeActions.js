import { BUY_CAKE,UPDATE_READING_LIST_DATA ,UPDATE_IMAGE_LIST_DATA} from './cakeTypes'

export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number
  }
}

export const updateReadingListData = (data)=>{
  return {
      type: UPDATE_READING_LIST_DATA,
      payload: data,
  };
}


export const updateImageListData=(data)=>{
  return {
    type:UPDATE_IMAGE_LIST_DATA,
    payload:data,
  }
}
 