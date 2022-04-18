
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({adapter: new Adapter()});
import ImageSelection from "./index";

import { ACCEPT_IMAGE, REJECT_IMAGE } from "../../actions";

describe('Image selection test suite', function() {

  const imageURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
  const image = {
    id: "id",
    urls: {
      small: imageURL
    }
  }


  it('Snapshot Testing',() => {
    const fetchRandomImage = jest.fn()
     const component = shallow(<ImageSelection image={image} fetchRandomImage={fetchRandomImage} />)
     expect(component).toMatchSnapshot();
  })


  it('should render image with approiate url', function() {
    const fetchRandomImage = jest.fn()
    const component = shallow(<ImageSelection image={image} fetchRandomImage={fetchRandomImage} />)
    expect(component.find("img").getElement().props.src).toEqual(imageURL)
    expect(component.find("img").getElement().props.alt).toEqual("id")
  });

  it("should accept image", function() {
    const fetchRandomImageMock = jest.fn()
    const component = shallow(<ImageSelection image={image} fetchRandomImage={fetchRandomImageMock} />)
    component.find("#accept").simulate("click");
    expect(fetchRandomImageMock).toBeCalledWith(ACCEPT_IMAGE)
  });

  it("should reject image", function() {
    const fetchRandomImageMock = jest.fn()
    const component = shallow(<ImageSelection image={image} fetchRandomImage={fetchRandomImageMock} />)
    component.find("#reject").simulate("click");
    expect(fetchRandomImageMock).toBeCalledWith(REJECT_IMAGE)
  });

});