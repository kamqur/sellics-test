import React,{useEffect, useReducer} from "react";
import styled from 'styled-components';

import { imageReviewerInitialStates } from "../../initial-states";
import { ImageReviewerReducer } from "../../reducers"

import Reviewer from "./reviewer";
import ApprovedImages from "../approved-images";
import {fetchRandomImage,getStoredImages} from "../../utils"

const StyledWrapper = styled.div`
  background-color: blue;
  display: flex;
  flex-direction: column;
  min-height: 800px;

`

const ImageReviewer = () => {

    const [state, dispatch] = useReducer(ImageReviewerReducer, {...imageReviewerInitialStates, acceptedImages: getStoredImages()});
    const { loading, activeImage, acceptedImages, rejectedImages } = state;
// eslint-disable-next-line
    useEffect(() => fetchRandomImage(undefined,dispatch,rejectedImages) ,[])


  return (
    <StyledWrapper>
      <Reviewer 
        loading={loading}
        activeImage={activeImage}
        fetchRandomImage={(type) => fetchRandomImage(type,dispatch,rejectedImages)}
      />
      
      <ApprovedImages acceptedImages={acceptedImages} />
    </StyledWrapper>
  )
}


export default ImageReviewer;
