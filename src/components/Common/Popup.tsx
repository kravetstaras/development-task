import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import { palette } from "../../styled-constants";

const StyledPopup = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  box-shadow: 0px 4px 10px 0px rgba(39, 40, 49, 0.03);
  background-color: ${palette.pure};
  border-radius: 2px;
`;

const StyledShadow = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vw;
  background-color: ${palette.dark};
  opacity: 0.8;
`;

type TypePopup = {
  isOpen: boolean;
  children: ReactNode;
};

export default function Popup({ children, isOpen = false }: TypePopup) {
  const [open, setOpen] = useState<boolean>(isOpen);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {open && (
        <>
          <StyledPopup>{children}</StyledPopup>
          <StyledShadow onClick={handleClose} />
        </>
      )}
    </>
  );
}
