import { styled } from "styled-components";
import { Theme } from "../Theme";
import React, { PropsWithChildren } from "react";

const ModalBackdrop = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${Theme.Surface[300]};
  width: 80%;
  max-width: 350px;
  height: 180px;
  border-radius: 4px;
  padding: 16px;
`;

export const Modal: React.FC<PropsWithChildren> = ({ children }) => (
  <ModalBackdrop>
    <ModalContents>{children}</ModalContents>
  </ModalBackdrop>
);
