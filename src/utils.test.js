import {fetchRandomImage,storeAcceptedImages,getStoredImages} from './utils';


describe('Testing Utils Methods',() => {
  jest.mock('./services/random-image-services',() =>({
    getRandomImage: jest.fn()
  }))

it("Should Fetch Random Images",() => {
    const dispatch = jest.fn();

     fetchRandomImage(undefined,dispatch,{}).then(() =>{

    })

    expect(dispatch).toBeCalled();

})



})