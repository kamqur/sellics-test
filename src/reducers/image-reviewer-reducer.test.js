import imageReviewerReducer from "./image-reviewer-reducer";
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


});
