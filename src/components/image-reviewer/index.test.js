
import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({adapter: new Adapter()});
import ImageReviewer from "./index"
import Reviewer from "./reviewer"
import ApprovedImages from "../approved-images"

describe('Image Reviewer test suite', function() {
  const response = shallow(<ImageReviewer />);

  it("find reviewer", () => {
    expect(response.children().find(Reviewer)).toBeTruthy()
  })

  it("find ApprovedImages", () => {
    expect(response.children().find(ApprovedImages)).toBeTruthy()
  })
  
});


