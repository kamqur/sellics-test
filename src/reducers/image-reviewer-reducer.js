
import { 
  START_FETCH_IMAGE,
  COMPELETE_FETCH_IMAGE,
  ERROR_FETCH_IMAGE,
  ACCEPT_IMAGE,
	REJECT_IMAGE
} from "../actions"

import { storeAcceptedImages } from "../utils"

const ImageReviewerReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case START_FETCH_IMAGE:
      return { ...state, loading: true }
    case COMPELETE_FETCH_IMAGE:
      return { ...state, loading: false, activeImage: payload.activeImage }
    case ERROR_FETCH_IMAGE:
      return { ...state, loading: false, errors: payload.errors }
    case ACCEPT_IMAGE:
      const newAcceptedImages = state.acceptedImages.concat(state.activeImage)     
      storeAcceptedImages(newAcceptedImages)
      return { ...state, acceptedImages: newAcceptedImages }
    case REJECT_IMAGE:
      return { ...state, rejectedImages: { ...state.rejectedImages, [state.activeImage.id]:state.activeImage } }
    default:
      throw new Error();
  }
}

export default ImageReviewerReducer;