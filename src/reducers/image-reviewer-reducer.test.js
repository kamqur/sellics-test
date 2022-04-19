import imageReviewerReducer from "./image-reviewer-reducer";
import imageReviewerInitialStates from '../initial-states/index';
import { START_FETCH_IMAGE,COMPELETE_FETCH_IMAGE,ERROR_FETCH_IMAGE,ACCEPT_IMAGE,REJECT_IMAGE} from "../actions"

describe('A suite', function() {
  it("should Test START_FETCH_IMAGE", () => {
    const response = imageReviewerReducer({}, { type: START_FETCH_IMAGE } )
    expect(response).toEqual( { loading: true })
  })

  it("should Test COMPELETE_FETCH_IMAGE",() => {
     const response = imageReviewerReducer({}, { type: COMPELETE_FETCH_IMAGE,payload:{activeImage:3}})
     expect(response).toEqual({loading:false,activeImage:3})
  })

  it("should Test ERROR_FETCH_IMAGE",() => {
    const response = imageReviewerReducer({},{type:ERROR_FETCH_IMAGE,payload:{errors:"Network Error"}})
    expect(response).toEqual({loading:false,errors:"Network Error"})
  })

  it('should Test ACCEPT_IMAGE',() => {
    const state = {
      acceptedImages: [],
      activeImage: {img:"1"}
    }    
    const response = imageReviewerReducer(state,{type:ACCEPT_IMAGE})
    const result = response.acceptedImages.find((i) => i.img === state.activeImage.img)
    expect(result).toEqual(state.activeImage);

  })

  it('Should Test REJECT_IMAGE',() => {
      const state = {
        rejectedImages: {},
        activeImage:{id:"123"}
      }
    const response = imageReviewerReducer(state,{type:REJECT_IMAGE})
    expect(response.rejectedImages[state.activeImage.id]).toEqual(state.activeImage);
  })


});
