import { 
  START_FETCH_IMAGE,
  COMPELETE_FETCH_IMAGE,
  ERROR_FETCH_IMAGE,
  REJECT_IMAGE,
} from "./actions";

import { getRandomImage } from './services/random-image-services';



const getStoredImages = () => localStorage.getItem("approved-list") ? 
  JSON.parse(localStorage.getItem("approved-list")) : {}


  const fetchRandomImage = (type,dispatch,rejectedImages) => {
    dispatch({ type: START_FETCH_IMAGE })
    return getRandomImage()
    .then((res) => {
        if (type) {
          if ( type === REJECT_IMAGE && rejectedImages[res.data.id]) {
            fetchRandomImage()
          }
          dispatch({ type })
        }
        dispatch({ type: COMPELETE_FETCH_IMAGE, payload: { activeImage: res.data } })
    }).catch( e => dispatch({ type: ERROR_FETCH_IMAGE, payload: { errors: e } }) )
}


const storeAcceptedImages = acceptedImages => localStorage.setItem("approved-list",JSON.stringify(acceptedImages))
  
export { getStoredImages, storeAcceptedImages,fetchRandomImage}