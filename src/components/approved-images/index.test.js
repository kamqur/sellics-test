import React from 'react';
import { shallow,configure,mount} from 'enzyme';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import ApprovedImages from './index';

configure({adapter: new Adapter()});


describe('Accepted Image Test Suite',function() {

    const imageURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
    const image1 = {
      id: "id1",
      urls: {
        small: imageURL
      }
    }
    const image2 = {
        id: "id2", 
        urls: {
          small: imageURL
        }
      }

    const acceptedImages = [image1,image2];  

    it('Snapshot Testing',() => {
        const component = shallow(<ApprovedImages acceptedImages={acceptedImages} />)  
        expect(component).toMatchSnapshot();
    })

    it('Accepted Images Count',() => {
        const component = mount(<ApprovedImages acceptedImages={acceptedImages} />) 
        expect(component.find("p").html().includes("APPROVED IMAGES (2)")).toBeTruthy()
    })


})