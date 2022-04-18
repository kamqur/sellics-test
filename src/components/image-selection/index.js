import React from "react";
import { Button } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'
import styled from 'styled-components';

import { ACCEPT_IMAGE, REJECT_IMAGE } from "../../actions"

const ImagerSelectionContainer = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 300px;
    border-radius: 5px; 
    padding-bottom: 5%;
    margin-left: 25%;
  }

  #footer {
    display: flex;
    padding-bottom: 2%;
    padding-top: 2%;
  }

  #reject {
    margin-left: 20%;
    background: black;
    border-color: black;
    color: white;
  }

  #accept{
    margin-left: 50%;
  }
`;




const ImageSelection = ({image,fetchRandomImage}) => (
  <ImagerSelectionContainer>
    {
      image.urls && image.urls.small ? 
        <img src={image.urls.small} alt={image.id} /> : ""
    }
    <div id="footer">
      <Button id="reject" shape="round" icon={<CloseOutlined />} onClick={() => fetchRandomImage(REJECT_IMAGE)}></Button>
      <Button id="accept" type="primary" shape="round" icon={<CheckOutlined/>} onClick={() => fetchRandomImage(ACCEPT_IMAGE)}></Button>
    </div>
  </ImagerSelectionContainer>
)



export default ImageSelection;
