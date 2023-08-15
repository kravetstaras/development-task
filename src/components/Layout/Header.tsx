import styled from 'styled-components';

import palette from "../../../palette";
import { LOGO_SIZE } from '../../../constants';

import OgilvyLogo from '../Common/OgilvyLogo';


const StyledHeader = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 50px;
    width: 100%;
    background-color: ${palette.pure};
    height: 50px;
    display: flex;
` 

export default function Header() {
  return (
    <StyledHeader><OgilvyLogo size={LOGO_SIZE.SMALL}/></StyledHeader>
  )
}

