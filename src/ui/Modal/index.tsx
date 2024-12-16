import React from "react";
import { createPortal } from "react-dom";
import { css } from "goober";
import { Palette } from "@/styles/constants";
import { Icon } from "@/ui/Icon";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
}

const modalOverlay = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const modal = css`
  padding: 32px;

  border-radius: 16px;
  background: ${Palette.white};

  box-shadow: 0 4px 80px 0 rgba(0, 0, 0, 0.18);
  width: 540px;
  max-width: 95%;
  position: relative;
`;

const modalCloseButton = css`
  position: absolute;
  top: 33px;
  right: 32px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 0;

  width: 24px;
  height: 24px;
`;

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className={modalOverlay}>
      <div className={modal}>
        {onClose && (
          <Icon
            name={"close-icon"}
            className={modalCloseButton}
            onClick={onClose}
          />
        )}

        {children}
      </div>
    </div>,
    document.getElementById("root")!,
  );
};

export default Modal;
