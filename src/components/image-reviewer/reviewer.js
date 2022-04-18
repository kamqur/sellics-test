import React from "react";
import styled from 'styled-components';
import { Spin } from 'antd';

import ImageSelection from '../image-selection';


const StyledContainer = styled.div`
  background-color: white;
	min-height: 400px;
  width: 40%;
  border-radius: 5px;
  margin-left: 30%;
  margin-top: 3%;
`

const StyledSpinerContainer =  styled.div`
	margin-top: 22%
`;

const Reviewer = ({
	loading,
	activeImage,
	fetchRandomImage
}) => (
	<StyledContainer>
		<h3>IMAGE APPROVAL APPLICATION</h3>
		{loading ? 
			<StyledSpinerContainer> 
				<Spin size="large" />
			</StyledSpinerContainer>
		: (
		<ImageSelection 
				image={activeImage}
				fetchRandomImage={fetchRandomImage}
			/>)
		}
			
	</StyledContainer>
);

export default Reviewer;