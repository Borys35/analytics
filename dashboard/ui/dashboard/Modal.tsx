"use client";

import React, { FC } from "react";
import ReactDOM from "react-dom";

interface Props {
  children: React.ReactNode;
  open: boolean;
  onShadowClick?: () => void;
}

const Modal: FC<Props> = ({ children, open, onShadowClick }) => {
  if (open)
    return ReactDOM.createPortal(
      <div
        className="fixed z-10 top-0 left-0 right-0 bottom-0 bg-neutral-900/75 grid place-items-center"
        onClick={onShadowClick}
      >
        <div className="box px-12 py-8">{children}</div>
      </div>,
      document.body
    );

  return null;
};

export default Modal;
