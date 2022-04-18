import React from "react";
import styled from 'styled-components';


const MainApprovedContainer = styled.div`


  p {
    text-align:left;
    color: white;
    margin-left:20px;
  }
`;

const ApprovedImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ThumbnailItem = styled.div`
  padding: 10px;
  background: white;
  margin: 10px;
  border-radius: 3px;
  

  img {
    width: 50px;
    height: 50px;
    border-radius: 3px;
  }
`;

const ApprovedImages = ({acceptedImages}) => {



  const thumbnails = acceptedImages.map((m) => 
    <ThumbnailItem key={m.id}>
      <img src={m.urls.thumb} alt={m.id} />
    </ThumbnailItem>
  )


  return (
    <MainApprovedContainer>
      <p>APPROVED IMAGES ({acceptedImages.length})</p>
      <ApprovedImagesContainer>
          {thumbnails}
      </ApprovedImagesContainer>
    </MainApprovedContainer>
  )
}


export default ApprovedImages;
