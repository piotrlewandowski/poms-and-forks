import styled from 'styled-components';

import {device} from 'utils';

export const AddRecipeFormContainer = styled.form`
	display: flex;
	flex-direction: column;
	min-height: 90vh;
	margin-top: 10vh;
	margin-bottom: 2vh;

	@media ${device.mobileM} and (orientation: landscape) {
		margin-top: 14vh;
	}

	@media ${device.tablet} and (orientation: portrait) {
		margin-top: 6vh;
	}

	@media ${device.laptop} and (orientation: landscape) {
		margin-top: 9vh;
	}

	@media ${device.iphoneX} and (orientation: portrait) {
		margin-top: 9vh;
	}
`;

const RootInput = styled.input`
	width: 100%;
	margin-top: 10px;
	padding: 5px;
	border: 0.5px solid #000000;
	border-radius: 5px;
	background: transparent;
	color: rgb(0, 0, 0);
	opacity: 1;
	font-weight: bold;
	letter-spacing: 0.5px;

	@media ${device.mobileM} and (orientation: landscape) {
		font-size: 16px;
	}

	@media ${device.tablet} {
		padding: 10px;
		border-radius: 10px;
		font-size: 20px;
	}

	@media ${device.laptop} {
		font-size: 22px;
	}

	&::placeholder {
		color: rgb(0, 0, 0);
		opacity: 1;
		font-weight: bold;
		letter-spacing: 0.5px;
	}
`;

export const TitleInput = styled(RootInput)``;

export const AddImagesContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	width: 100%;
`;

export const BigImageContainer = styled.div`
	flex-basis: 45%;
	position: relative;
	margin: 4% auto 5%;
	border: 0.5px solid #000000;
	border-radius: 7px;
	background: transparent;
	${(props) =>
		typeof props.url !== 'undefined'
			? `background-image: url(${process.env.REACT_APP_API_URL}/files/image/${props.url});`
			: ''}
	background-size: cover;
	background-position: center;

	@media ${device.mobileM} {
		margin: 3% auto 2%;
	}

	@media ${device.tablet} {
		border-radius: 10px;
	}

	&::after {
		display: block;
		padding-bottom: 70%;
		content: '';
	}

	input {
		display: none;
	}

	p {
		position: absolute;
		width: 100%;
		text-align: center;
		top: 15%;
		left: 50%;
		transform: translateX(-50%);
	}

	p + p {
		top: 70%;
	}
`;

export const ShortDescriptionTextArea = styled.textarea`
	padding: 5px;
	border: 0.5px solid #000000;
	border-radius: 5px;
	background: transparent;
	font-weight: bold;
	font-size: 14px;
	line-height: 16px;

	@media ${device.mobileM} {
		padding: 7px;
		font-size: 16px;
	}

	@media ${device.tablet} {
		padding: 12px;
		border-radius: 10px;
		font-size: 20px;
		line-height: 20px;
	}

	&::placeholder {
		color: rgb(0, 0, 0);
		opacity: 1;
		font-weight: bold;
		font-weight: bold;
		letter-spacing: 0.5px;
	}
`;

export const RecipeLevelInfoContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	margin-top: 10px;
	padding: 5px;
	background: transparent;
	border: 0.5px solid #000000;
	border-radius: 5px;

	@media ${device.tablet} {
		padding: 10px;
		border-radius: 10px;
	}

	> p {
		display: flex;
		align-items: center;
		flex-basis: 40%;
		font-size: 14px;

		@media ${device.mobileM} {
			font-size: 16px;
		}

		@media ${device.tablet} {
			font-size: 20px;
		}
	}
`;

export const StarsLevelContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-basis: 60%;

	img {
		width: 15%;
		cursor: pointer;
		transition: 0.3s;

		@media ${device.mobileM} {
			width: 11%;
		}

		@media ${device.tablet} {
			width: 9%;
		}

		@media ${device.laptop} {
			width: 7%;

			&:hover {
				transform: translateY(-5px);
			}
		}

		&::after {
			display: block;
			padding-bottom: 100%;
			content: '';
		}
	}
`;

export const CategoryAndServingsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	margin-top: 10px;
`;

const RootSelect = styled.select`
	padding: 5px;
	border: 0.5px solid #000000;
	border-radius: 5px;
	color: rgb(0, 0, 0);
	background: transparent;
	opacity: 1;
	font-weight: bold;
	letter-spacing: 0.5px;

	@media ${device.mobileM} and (orientation: landscape) {
		font-size: 16px;
	}

	@media ${device.tablet} {
		border-radius: 10px;
		font-size: 20px;
	}

	@media ${device.laptop} {
		font-size: 22px;
	}
`;

export const CategorySelectionField = styled(RootSelect)`
	flex-basis: 45%;
	margin-right: 5px;
`;

export const MainSkillSelectionField = styled(RootSelect)`
	width: 100%;
	margin-top: 10px;

	@media ${device.mobileM} and (orientation: landscape) {
		font-size: 14px;
		border-radius: 5px;
	}

	@media ${device.tablet} and (max-height: 420px) {
		border-radius: 5px;
	}

	@media ${device.tablet} and (orientation: portrait) {
		border-radius: 5px;
		font-size: 20px;
	}

	@media ${device.iPadPro} and (orientation: landscape) {
		font-size: 28px;
	}

	@media ${device.laptop} and (orientation: landscape) {
		min-height: 40px;
		font-size: 18px;
	}
`;

export const ServingsInputField = styled(RootInput)`
	margin-top: 0;
	width: 45%;
`;

export const TagsInputField = styled(RootInput)``;

export const PreparationTimeInputField = styled(RootInput)``;

export const NutritionFactsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	flex-wrap: wrap;
	width: 100%;
	margin-top: 10px;
	border-top: 2px solid rgba(0, 0, 0, 0.4);

	> p {
		padding: 0;
		margin-top: 10px;
		font-size: 18px;
		flex-basis: 100%;

		@media ${device.mobileM} {
			font-size: 20px;
		}

		@media ${device.tablet} {
			font-size: 30px;
		}
	}
`;

export const NutritionInputField = styled.input`
	width: 48%;
	margin-top: 10px;
	padding: 5px;
	background: transparent;
	border: 0.5px solid #000000;
	border-radius: 5px;
	font-weight: bold;

	@media ${device.mobileM} {
		font-size: 16px;
		padding: 7px;
	}

	@media ${device.tablet} {
		padding: 10px;
	}

	@media ${device.tablet} {
		border-radius: 10px;
		font-size: 20px;
	}

	@media ${device.laptop} {
		font-size: 22px;
	}

	&::placeholder {
		color: rgb(0, 0, 0);
		opacity: 1;
		font-weight: bold;
		letter-spacing: 0.5px;
	}
`;

export const IngredientsContainer = styled(NutritionFactsContainer)`
	display: block;
`;

export const IngredientAddContainer = styled.div`
	width: 100%;
	position: relative;
`;

export const IngredientAddInputsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	margin-top: 5px;
`;

export const IngredientNameInputField = styled(RootInput)`
	width: 80%;
	margin-top: 0;
	margin-bottom: 10px;
`;

export const IngredientAmountInputField = styled(RootInput)`
	width: 35%;
	margin-top: 0;
	margin-right: 10px;
`;

export const IngredientCategorySelectField = styled(RootSelect)`
	flex-basis: 31%;
	margin-right: 5px;

	&::placeholder {
		color: rgb(0, 0, 0);
		opacity: 1;
		font-weight: bold;
		letter-spacing: 0.5px;
	}
`;

export const SingleIngredientInfoContainer = styled.div`
	position: relative;
	margin-top: 10px;
	padding: 5px;
	background: transparent;
	border: 0.5px solid #000000;
	border-radius: 5px;

	@media ${device.mobileS} {
		padding: 8px 5px;
	}

	@media ${device.mobileM} {
		padding: 12px 8px;
	}

	@media ${device.mobileL} {
		padding: 18px 9px;
	}

	@media ${device.laptop} {
		padding: 25px 10px;
		border-radius: 10px;
		font-size: 22px;
	}

	> p {
		width: 85%;
		font-size: 14px;
		font-weight: bold;
		overflow-x: scroll;

		@media ${device.mobileL} {
			font-size: 16px;
		}

		@media ${device.tablet} {
			font-size: 20px;
			line-height: 20px;
		}

		@media ${device.laptop} {
			font-size: 22px;
			line-height: 22px;
		}
	}
`;

export const DescriptionStepsContainer = styled(NutritionFactsContainer)`
	display: block;
`;

export const DescriptionStepsAddContainer = styled.div`
	position: relative;
`;

export const LongDescriptionTextArea = styled(ShortDescriptionTextArea)`
	margin-top: 10px;
	width: 80%;

	@media ${device.tablet} {
		font-size: 20px;
		line-height: 20px;
	}

	@media ${device.laptop} {
		font-size: 22px;
		line-height: 22px;
	}
`;

export const SingleDescriptionStepInfoContainer = styled.div`
	display: flex;
	position: relative;
	margin-bottom: 10px;
	margin-top: 10px;
	padding: 12px;
	background: transparent;
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);

	@media ${device.mobileS} {
		padding: 15px;
	}

	@media ${device.mobileL} {
		padding: 20px 15px;
	}

	@media ${device.laptop} {
		padding: 25px 10px;
		border-radius: 10px;
		font-size: 22px;
	}

	> span {
		flex-basis: 5%;
		margin-right: 5px;
		font-size: 12px;
		color: rgba(0, 0, 0, 0.46);

		@media ${device.mobileL} {
			font-size: 14px;
		}

		@media ${device.tablet} {
			font-size: 20px;
		}

		@media ${device.laptop} {
			font-size: 22px;
		}
	}

	> p {
		max-width: 80%;
		font-size: 12px;
		overflow-x: scroll;

		@media ${device.mobileL} {
			font-size: 16px;
		}

		@media ${device.tablet} {
			font-size: 20px;
			line-height: 20px;
		}

		@media ${device.laptop} {
			font-size: 22px;
			line-height: 22px;
		}
	}
`;

export const ConfirmInput = styled(RootInput)`
	position: realtive;
	cursor: pointer;
	text-decoration: none;
	overflow: hidden;
	background-color: white;
	background: none;

	&::before {
		background: ${({theme}) => theme.colors.blueGreen};
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 180%;
		z-index: -1;
		transition: 0.8s;
		border-radius: 0 0 50% 50%;
		content: '';
	}

	@media ${device.laptop} and (orientation: landscape) {
		&:hover::before {
			height: 0;
		}
	}
`;

export const Option = styled.option`
	padding: 5px;
	border: 0.5px solid #000000;
	border-radius: 5px;
	color: rgb(0, 0, 0);
	background: transparent;
	opacity: 1;
	font-weight: bold;
	letter-spacing: 0.5px;

	@media ${device.mobileM} and (orientation: landscape) {
		font-size: 12px;
	}

	@media ${device.tablet} {
		font-size: 14px;
	}

	@media ${device.laptop} {
		font-size: 16px;
	}
`;
