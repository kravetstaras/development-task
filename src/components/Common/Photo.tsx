import styled from "styled-components";

import manPhoto from "../../assets/_mock_/man-photo.png";

const StyledPhoto = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  object-fit: fill;
`;

export default function Photo() {
  return <StyledPhoto src={manPhoto} alt="user mock photo" />;
}
