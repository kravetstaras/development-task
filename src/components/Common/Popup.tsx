import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import { palette } from "../../styled-constants";

const StyledPopup = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: ${palette.darkBg};
  z-index: 999;

  .popup-body {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 30px;
    box-shadow: 0px 4px 10px 0px rgba(39, 40, 49, 0.03);
    background-color: ${palette.pure};
    border-radius: 2px;
    z-index: 999;
  }
`;

type TypePopup = {
  isOpen: boolean;
  children: ReactNode;
  callback?: (value: boolean) => void;
};

export default function Popup({
  children,
  isOpen = false,
  callback,
}: TypePopup) {
  const [open, setOpen] = useState<boolean>(isOpen);

  const handleClose = () => {
    setOpen(false);
    callback(false);
  };
  return (
    <>
      {open && (
        <>
          <StyledPopup onClick={handleClose}>
            <div className="popup-body" onClick={(e) => e.stopPropagation()}>
              {children}
            </div>
          </StyledPopup>
        </>
      )}
    </>
  );
}
